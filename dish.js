const storageKeys = {
  dishes: "myKitchenDishes",
  fridge: "myKitchenFridge",
};

const authKeys = {
  users: "myKitchenUsers",
  currentUser: "myKitchenCurrentUser",
};

const getStoredJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn("Storage error:", error);
    return fallback;
  }
};

const buildYouTubeSearchUrl = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const buildYouTubeEmbedUrl = (query) =>
  `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
    query
  )}`;

const defaultSteps = (dish) => [
  `حضّر مكونات ${dish.name} واغسلها جيداً.`,
  "سخّن الزيت وشوّح البصل والثوم ثم أضف المكونات الرئيسية.",
  "أضف البهارات والسوائل واترك الطبق ينضج على نار هادئة.",
  "قدّم الطبق ساخناً مع التزيين المناسب.",
];

const svgData = (label, color, accent) => {
  const safeColor = color || "#d9a441";
  const safeAccent = accent || "#c47f2a";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${safeColor}"/>
        <stop offset="100%" stop-color="${safeAccent}"/>
      </linearGradient>
    </defs>
    <rect width="420" height="260" rx="28" fill="url(#g)"/>
    <circle cx="80" cy="70" r="36" fill="rgba(255,255,255,0.25)"/>
    <circle cx="340" cy="210" r="52" fill="rgba(255,255,255,0.18)"/>
    <text x="210" y="150" text-anchor="middle" font-size="38" fill="#1b2c2d" font-family="Tajawal, sans-serif">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const setRemoteImage = (img, remote, fallback) => {
  if (!img) return;
  img.src = fallback;
  if (!remote) return;
  const probe = new Image();
  probe.referrerPolicy = "no-referrer";
  probe.onload = () => {
    img.src = remote;
  };
  probe.onerror = () => {
    img.src = fallback;
  };
  probe.src = remote;
};

const dishName = document.getElementById("dishName");
const dishTags = document.getElementById("dishTags");
const dishSummary = document.getElementById("dishSummary");
const dishMetaSummary = document.getElementById("dishMetaSummary");
const dishMeta = document.getElementById("dishMeta");
const dishImage = document.getElementById("dishImage");
const dishStatus = document.getElementById("dishStatus");
const dishIngredients = document.getElementById("dishIngredients");
const missingIngredients = document.getElementById("missingIngredients");
const dishSteps = document.getElementById("dishSteps");
const dishVideoLink = document.getElementById("dishVideoLink");
const dishVideo = document.getElementById("dishVideo");
const dishSections = document.querySelectorAll("[data-dish-section]");
const dishNotFound = document.getElementById("dishNotFound");

const dishId = new URLSearchParams(window.location.search).get("id");
const dishes = getStoredJson(storageKeys.dishes, []);
const storedUserId = getStoredJson(authKeys.currentUser, "");
const storedUsers = getStoredJson(authKeys.users, []);
const storedUser = storedUsers.find((user) => user.id === storedUserId);
const fridgeItems =
  storedUser?.fridge && storedUser.fridge.length
    ? storedUser.fridge
    : getStoredJson(storageKeys.fridge, []);
const dish = dishes.find((item) => item.id === dishId);

if (!dish) {
  dishSections.forEach((section) => {
    section.hidden = true;
  });
  if (dishNotFound) {
    dishNotFound.hidden = false;
  }
  if (dishName) {
    dishName.textContent = "الطبق غير متوفر";
  }
} else {
  document.title = `مطبخي - ${dish.name}`;
  const styles = Array.isArray(dish.styles) && dish.styles.length
    ? dish.styles
    : ["عربي"];
  const stylesText = styles.join("، ");
  const summaryText = `طبق ${dish.name} بطابع ${stylesText} ومناسب لـ ${dish.meal}.`;

  if (dishName) dishName.textContent = dish.name;
  if (dishSummary) dishSummary.textContent = summaryText;
  if (dishMetaSummary)
    dishMetaSummary.textContent =
      "تم تجهيز التفاصيل بناءً على مخزون الثلاجة الحالي.";

  if (dishTags) {
    const tags = [
      `<span class="tag meal">${dish.meal}</span>`,
      ...styles.map((style) => `<span class="tag style">${style}</span>`),
    ].join("");
    dishTags.innerHTML = tags;
  }

  const available = new Set(
    fridgeItems
      .filter((item) => item.inFridge && item.quantity > 0)
      .map((item) => item.name || item.id)
  );
  const ingredientNames = dish.ingredients.map((ingredient) => ingredient.name);
  const missing = ingredientNames.filter(
    (ingredient) => !available.has(ingredient)
  );
  const hasInventory = available.size > 0;
  const ready = hasInventory && missing.length === 0;

  if (dishStatus) {
    dishStatus.classList.remove("ready", "not-ready");
    if (!hasInventory) {
      dishStatus.textContent = "فعّل مخزون الثلاجة للتحقق من التوفر";
      dishStatus.classList.add("not-ready");
    } else if (ready) {
      dishStatus.textContent = "كل المكونات متوفرة";
      dishStatus.classList.add("ready");
    } else {
      dishStatus.textContent = `ينقصك ${missing.length} مكونات`;
      dishStatus.classList.add("not-ready");
    }
  }

  if (dishMeta) {
    const availableCount = ingredientNames.filter((name) =>
      available.has(name)
    ).length;
    dishMeta.innerHTML = `
      <span class="meta-pill">عدد المكونات: ${dish.ingredients.length}</span>
      <span class="meta-pill">المتوفر: ${availableCount}</span>
      <span class="meta-pill">الناقص: ${missing.length}</span>
    `;
  }

  if (dishIngredients) {
    dishIngredients.innerHTML = dish.ingredients
      .map((ingredient) => {
        const isAvailable = available.has(ingredient.name);
        return `
          <div class="detail-ingredient ${
            isAvailable ? "available" : "missing"
          }">
            <span>${ingredient.name}</span>
            <span class="ingredient-qty">${ingredient.qty}</span>
          </div>
        `;
      })
      .join("");
  }

  if (missingIngredients) {
    missingIngredients.classList.remove("ready", "waiting");
    if (!hasInventory) {
      missingIngredients.textContent =
        "فعّل مخزون الثلاجة لتظهر حالة توفر المكونات.";
      missingIngredients.classList.add("waiting");
    } else if (missing.length === 0) {
      missingIngredients.textContent = "كل المكونات متوفرة في الثلاجة.";
      missingIngredients.classList.add("ready");
    } else {
      missingIngredients.textContent = `المكونات الناقصة: ${missing.join("، ")}`;
    }
  }

  if (dishSteps) {
    const steps = dish.steps && dish.steps.length ? dish.steps : defaultSteps(dish);
    dishSteps.innerHTML = steps.map((step) => `<li>${step}</li>`).join("");
  }

  const videoQuery = dish.videoQuery || dish.name;
  const videoUrl = dish.videoUrl || buildYouTubeSearchUrl(videoQuery);
  const embedUrl = dish.embedUrl || buildYouTubeEmbedUrl(videoQuery);

  if (dishVideoLink) {
    dishVideoLink.href = videoUrl;
  }
  if (dishVideo) {
    dishVideo.src = embedUrl;
  }

  if (dishImage) {
    dishImage.alt = dish.name;
    const fallback = svgData(dish.name, dish.color, dish.accent);
    setRemoteImage(dishImage, dish.image, fallback);
  }
}
