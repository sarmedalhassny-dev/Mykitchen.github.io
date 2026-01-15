const palette = [
  { color: "#d9a441", accent: "#c47f2a" },
  { color: "#f0e3c2", accent: "#d7c39a" },
  { color: "#f2b3a2", accent: "#e48679" },
  { color: "#ed6a5a", accent: "#c84a3c" },
  { color: "#e2c290", accent: "#c19b69" },
  { color: "#f6e7b4", accent: "#d8c07b" },
  { color: "#e4c16f", accent: "#b98f2c" },
  { color: "#c16a45", accent: "#8f3e25" },
  { color: "#3fa66b", accent: "#2d7b4e" },
  { color: "#6bcf91", accent: "#4da66f" },
  { color: "#8dd5a3", accent: "#5cad79" },
  { color: "#e57c4f", accent: "#b8542f" },
  { color: "#f7f1e6", accent: "#ccc3b7" },
  { color: "#d4a46f", accent: "#b07c45" },
];

const categoryConfig = {
  vegetable: { unit: "كغم", store: "سوق الخضار المركزي", price: 1000 },
  fruit: { unit: "كغم", store: "سوق الخضار المركزي", price: 2000 },
  herb: { unit: "ربطة", store: "سوق الخضار المركزي", price: 700 },
  meat: { unit: "كغم", store: "ملحمة الكرخ", price: 12000 },
  seafood: { unit: "كغم", store: "سوق السمك - دجلة", price: 14000 },
  dairy: { unit: "علبة", store: "سوبر ماركت الرافدين", price: 1800 },
  grain: { unit: "كغم", store: "سوبر ماركت الرافدين", price: 3500 },
  legume: { unit: "كغم", store: "سوق الشورجة", price: 3000 },
  spice: { unit: "علبة", store: "سوق الشورجة", price: 1200 },
  oil: { unit: "لتر", store: "سوبر ماركت الرافدين", price: 6000 },
  sauce: { unit: "علبة", store: "سوبر ماركت الرافدين", price: 2200 },
  baking: { unit: "علبة", store: "سوبر ماركت الرافدين", price: 1800 },
  canned: { unit: "علبة", store: "سوق الشورجة", price: 2300 },
};

const vegetables = [
  { id: "potato", name: "بطاطا", query: "potato" },
  { id: "tomato", name: "طماطة", query: "tomato" },
  { id: "onion", name: "بصل", query: "onion" },
  { id: "garlic", name: "ثوم", query: "garlic" },
  { id: "pepper", name: "فلفل اخضر", query: "green bell pepper" },
  { name: "جزر", query: "carrot" },
  { name: "باذنجان", query: "eggplant" },
  { name: "كوسا", query: "zucchini" },
  { id: "cucumber", name: "خيار", query: "cucumber" },
  { id: "lettuce", name: "خس", query: "lettuce" },
  { name: "سبانخ", query: "spinach" },
  { name: "فطر", query: "mushroom" },
  { name: "زهرة", query: "cauliflower" },
  { name: "بروكلي", query: "broccoli" },
  { name: "ملفوف", query: "cabbage" },
  { name: "كرفس", query: "celery" },
  { name: "ذرة", query: "sweet corn" },
  { name: "بازلاء", query: "green peas" },
  { name: "فاصوليا خضراء", query: "green beans" },
  { name: "شمندر", query: "beetroot" },
  { name: "بطاطا حلوة", query: "sweet potato" },
  { name: "شلغم", query: "turnip" },
  { name: "كراث", query: "leek" },
  { name: "بامية", query: "okra" },
  { name: "فجل", query: "radish" },
  { name: "هليون", query: "asparagus" },
  { name: "قرع", query: "pumpkin" },
  { name: "فلفل حار", query: "chili pepper" },
  { name: "خرشوف", query: "artichoke" },
  { name: "فلفل احمر", query: "red bell pepper" },
];

const fruits = [
  { name: "تفاح", query: "apple" },
  { name: "موز", query: "banana" },
  { name: "برتقال", query: "orange fruit" },
  { id: "lemon", name: "ليمون", query: "lemon" },
  { name: "عنب", query: "grapes" },
  { name: "رمان", query: "pomegranate" },
  { name: "فراولة", query: "strawberry" },
  { name: "تمر", query: "dates" },
  { name: "مانجو", query: "mango" },
  { name: "خوخ", query: "peach" },
  { name: "مشمش", query: "apricot" },
  { name: "اناناس", query: "pineapple" },
  { name: "بطيخ", query: "watermelon" },
  { name: "شمام", query: "melon" },
  { name: "كمثرى", query: "pear" },
];

const herbs = [
  { name: "بقدونس", query: "parsley" },
  { name: "كزبرة", query: "cilantro" },
  { name: "نعناع", query: "mint leaves" },
  { name: "شبت", query: "dill" },
  { name: "ريحان", query: "basil" },
  { name: "زعتر اخضر", query: "fresh thyme" },
  { name: "روزماري", query: "rosemary" },
  { name: "ورق غار", query: "bay leaves" },
  { name: "جرجير", query: "arugula" },
  { name: "ملوخية", query: "molokhia leaves" },
  { name: "بقلة", query: "purslane" },
  { name: "حبق", query: "sweet basil" },
  { name: "مرامية", query: "sage herb" },
  { name: "بصل اخضر", query: "green onion" },
  { name: "ورق كرفس", query: "celery leaves" },
];

const meats = [
  { id: "chicken", name: "دجاج", query: "chicken" },
  { name: "صدر دجاج", query: "chicken breast" },
  { name: "افخاذ دجاج", query: "chicken thighs" },
  { name: "اجنحة دجاج", query: "chicken wings" },
  { name: "دجاج مفروم", query: "ground chicken" },
  { name: "لحم غنم", query: "lamb meat" },
  { name: "لحم بقر", query: "beef meat" },
  { name: "لحم مفروم", query: "ground beef" },
  { name: "لحم عجل", query: "veal" },
  { name: "كباب لحم", query: "kebab meat" },
  { name: "سجق", query: "sausage" },
  { name: "ديك رومي", query: "turkey meat" },
  { name: "كبدة غنم", query: "lamb liver" },
  { name: "ريش غنم", query: "lamb chops" },
  { name: "كوارع", query: "cow feet" },
];

const seafood = [
  { name: "سمك بني", query: "barbel fish" },
  { name: "سمك كطان", query: "carp fish" },
  { name: "سمك شبوط", query: "common carp" },
  { name: "سمك زبيدي", query: "pomfret fish" },
  { name: "سمك هامور", query: "grouper fish" },
  { name: "سمك صبور", query: "shad fish" },
  { name: "سمك سلمون", query: "salmon" },
  { name: "فيليه سمك", query: "fish fillet" },
  { name: "روبيان", query: "shrimp" },
  { name: "كاليماري", query: "squid" },
];

const dairy = [
  { name: "حليب كامل الدسم", query: "whole milk", unit: "لتر" },
  { name: "حليب قليل الدسم", query: "low fat milk", unit: "لتر" },
  { name: "لبن", query: "yogurt" },
  { name: "لبن رائب", query: "buttermilk", unit: "لتر" },
  { name: "قشطة", query: "cream" },
  { name: "زبدة", query: "butter" },
  { name: "جبن عكاوي", query: "akkawi cheese" },
  { name: "جبن قشقوان", query: "kashkaval cheese" },
  { name: "جبن موزاريلا", query: "mozzarella cheese" },
  { name: "جبن فيتا", query: "feta cheese" },
  { name: "جبن كريم", query: "cream cheese" },
  { name: "لبنة", query: "labneh" },
  { name: "قيمر", query: "clotted cream" },
  { name: "روب", query: "yogurt bowl" },
  { id: "egg", name: "بيض", query: "eggs", unit: "حبة", price: 500 },
];

const grains = [
  { id: "rice", name: "تمن", query: "rice" },
  { name: "تمن بسمتي", query: "basmati rice" },
  { name: "تمن عنبر", query: "amber rice" },
  { name: "برغل", query: "bulgur" },
  { name: "سميد", query: "semolina" },
  { name: "فريكة", query: "freekeh" },
  { name: "شوفان", query: "oats" },
  { name: "مكرونة سباغيتي", query: "spaghetti" },
  { name: "مكرونة قلم", query: "penne pasta" },
  { name: "مكرونة لسان العصفور", query: "orzo pasta" },
  { name: "شعيرية", query: "vermicelli" },
  { name: "كسكسي", query: "couscous" },
  { name: "شعير", query: "barley" },
  { name: "ذرة مجروشة", query: "corn grits" },
  { name: "طحين ابيض", query: "white flour" },
  { name: "طحين قمح كامل", query: "whole wheat flour" },
  { name: "نشا الذرة", query: "cornstarch" },
  { name: "رقائق لازانيا", query: "lasagna sheets" },
  { name: "خبز عربي", query: "pita bread", unit: "ربطة", price: 1500 },
  { name: "خبز توست", query: "toast bread", unit: "ربطة", price: 1800 },
];

const legumes = [
  { id: "lentils", name: "عدس", query: "lentils" },
  { name: "عدس احمر", query: "red lentils" },
  { name: "عدس اخضر", query: "green lentils" },
  { name: "حمص", query: "chickpeas" },
  { name: "فاصوليا بيضاء", query: "white beans" },
  { name: "فاصوليا حمراء", query: "kidney beans" },
  { name: "فول", query: "fava beans" },
  { name: "لوبيا", query: "black eyed peas" },
  { name: "ماش", query: "mung beans" },
  { name: "بازلاء مجففة", query: "split peas" },
];

const spices = [
  { id: "spices", name: "بهارات", query: "mixed spices" },
  { id: "salt", name: "ملح", query: "salt" },
  { name: "فلفل اسود", query: "black pepper" },
  { name: "فلفل ابيض", query: "white pepper" },
  { id: "cumin", name: "كمون", query: "cumin" },
  { name: "كزبرة ناشفة", query: "coriander powder" },
  { name: "كركم", query: "turmeric" },
  { name: "بابريكا", query: "paprika" },
  { name: "دارسين", query: "cinnamon" },
  { name: "هيل", query: "cardamom" },
  { name: "قرنفل", query: "cloves" },
  { name: "زنجبيل بودرة", query: "ginger powder" },
  { name: "جوزة الطيب", query: "nutmeg" },
  { name: "سماق", query: "sumac" },
  { name: "زعفران", query: "saffron" },
  { name: "بهارات كبسة", query: "kabsa spice" },
  { name: "بهارات شاورما", query: "shawarma spice" },
  { name: "بهارات مشاوي", query: "grill seasoning" },
  { name: "بهارات دولمة", query: "dolma spice" },
  { name: "بهارات كبة", query: "kibbeh spice" },
  { name: "فلفل حار مجروش", query: "chili flakes" },
  { name: "كاري", query: "curry powder" },
  { name: "زعتر مجفف", query: "dried thyme" },
  { name: "نعناع مجفف", query: "dried mint" },
  { name: "ثوم بودرة", query: "garlic powder" },
  { name: "بصل بودرة", query: "onion powder" },
  { name: "بهار برياني", query: "biryani spice" },
  { name: "بهار حب", query: "allspice" },
  { name: "ملح ليمون", query: "citric acid" },
  { name: "شطة بودرة", query: "chili powder" },
];

const oils = [
  { id: "oil", name: "زيت طبخ", query: "cooking oil" },
  { name: "زيت زيتون", query: "olive oil" },
  { name: "زيت دوار الشمس", query: "sunflower oil" },
  { name: "زيت ذرة", query: "corn oil" },
  { name: "زيت سمسم", query: "sesame oil" },
  { name: "زيت جوز الهند", query: "coconut oil" },
  { name: "دهن حر", query: "ghee" },
  { name: "سمن نباتي", query: "margarine" },
  { name: "زيت كانولا", query: "canola oil" },
  { name: "زيت زيتون بكر", query: "extra virgin olive oil" },
];

const sauces = [
  { name: "صلصة طماطة", query: "tomato sauce" },
  { name: "معجون طماطة", query: "tomato paste" },
  { name: "كاتشب", query: "ketchup" },
  { name: "مايونيز", query: "mayonnaise" },
  { name: "صلصة صويا", query: "soy sauce" },
  { name: "صلصة حارة", query: "hot sauce" },
  { name: "خل ابيض", query: "white vinegar" },
  { name: "دبس رمان", query: "pomegranate molasses" },
  { name: "دبس تمر", query: "date syrup" },
  { name: "عمبة", query: "mango pickle" },
];

const baking = [
  { name: "سكر", query: "sugar", unit: "كغم", price: 2000 },
  { name: "سكر بني", query: "brown sugar", unit: "كغم", price: 2400 },
  { name: "خميرة", query: "yeast" },
  { name: "بيكنج باودر", query: "baking powder" },
  { name: "بيكنج صودا", query: "baking soda" },
  { name: "فانيلا", query: "vanilla" },
  { name: "كاكاو بودرة", query: "cocoa powder" },
  { name: "جيلاتين", query: "gelatin" },
  { name: "حليب مكثف", query: "condensed milk" },
  { name: "عسل", query: "honey", unit: "علبة" },
];

const canned = [
  { name: "تونة معلبة", query: "canned tuna" },
  { name: "سردين معلب", query: "canned sardines" },
  { name: "ذرة معلبة", query: "canned corn" },
  { name: "فول معلب", query: "canned fava beans" },
  { name: "حمص معلب", query: "canned chickpeas" },
  { name: "فاصوليا معلبة", query: "canned beans" },
  { name: "طماطة معلبة", query: "canned tomatoes" },
  { name: "فطر معلب", query: "canned mushrooms" },
  { name: "خضار مشكلة معلبة", query: "mixed vegetables can" },
  { name: "ورق عنب معلب", query: "canned grape leaves" },
];


const catalog = [
  ...vegetables.map((item) => ({ ...item, category: "vegetable" })),
  ...fruits.map((item) => ({ ...item, category: "fruit" })),
  ...herbs.map((item) => ({ ...item, category: "herb" })),
  ...meats.map((item) => ({ ...item, category: "meat" })),
  ...seafood.map((item) => ({ ...item, category: "seafood" })),
  ...dairy.map((item) => ({ ...item, category: "dairy" })),
  ...grains.map((item) => ({ ...item, category: "grain" })),
  ...legumes.map((item) => ({ ...item, category: "legume" })),
  ...spices.map((item) => ({ ...item, category: "spice" })),
  ...oils.map((item) => ({ ...item, category: "oil" })),
  ...sauces.map((item) => ({ ...item, category: "sauce" })),
  ...baking.map((item) => ({ ...item, category: "baking" })),
  ...canned.map((item) => ({ ...item, category: "canned" })),
];

const buildImageUrl = () => "";

const buildDishImageUrl = () => "";

const buildYouTubeSearchUrl = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const buildYouTubeEmbedUrl = (query) =>
  `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
    query
  )}`;

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const defaultDishSteps = (dish) => [
  `حضّر مكونات ${dish.name} واغسلها جيداً.`,
  "سخّن الزيت وشوّح البصل والثوم ثم أضف المكونات الرئيسية.",
  "أضف البهارات والسوائل واترك الطبق ينضج على نار هادئة.",
  "قدّم الطبق ساخناً مع التزيين المناسب.",
];

if (catalog.length !== 200) {
  console.warn(`Expected 200 items, got ${catalog.length}`);
}

const usedIds = new Set();

const products = catalog.map((item, index) => {
  const paletteEntry = palette[index % palette.length];
  const category = categoryConfig[item.category];
  const baseId = item.id || slugify(item.query || item.name);
  let id = baseId;
  let counter = 1;

  while (usedIds.has(id)) {
    counter += 1;
    id = `${baseId}-${counter}`;
  }
  usedIds.add(id);

  const price = item.price ?? (category.price + (index % 4) * 200);

  return {
    id,
    name: item.name,
    price,
    unit: item.unit || category.unit,
    store: item.store || category.store,
    image: buildImageUrl(),
    query: item.query || item.name,
    category: item.category,
    color: paletteEntry.color,
    accent: paletteEntry.accent,
  };
});


const defaultFridgeStock = new Map([
  ["potato", 2],
  ["rice", 1],
  ["tomato", 1],
  ["egg", 6],
  ["oil", 0.5],
  ["cucumber", 1],
  ["lettuce", 1],
  ["spices", 1],
  ["salt", 1],
]);

const fridgeItems = products.map((product) => {
  const quantity = defaultFridgeStock.get(product.id) || 0;
  return {
    id: product.id,
    name: product.name,
    unit: product.unit,
    quantity,
    inFridge: quantity > 0,
  };
});


const dishCatalog = [
  {
    name: "بيض بالطماطة",
    meal: "ريوك",
    styles: ["عربي"],
    ingredients: [
      { name: "بيض", qty: "3 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ملح", qty: "نصف ملعقة صغيرة" },
      { name: "زيت طبخ", qty: "ملعقتان كبيرتان" },
    ],
    query: "shakshuka",
    videoQuery: "بيض بالطماطة وصفة عراقية",
  },
  {
    name: "قيمر وعسل",
    meal: "ريوك",
    styles: ["عربي"],
    ingredients: [
      { name: "قيمر", qty: "200 غم" },
      { name: "عسل", qty: "ملعقة كبيرة" },
      { name: "خبز عربي", qty: "ربطة" },
    ],
    query: "clotted cream honey breakfast",
    videoQuery: "قيمر وعسل ريوك",
  },
  {
    name: "جبن عكاوي مع نعناع",
    meal: "ريوك",
    styles: ["عربي"],
    ingredients: [
      { name: "جبن عكاوي", qty: "200 غم" },
      { name: "نعناع", qty: "قبضة" },
      { name: "خبز عربي", qty: "ربطة" },
    ],
    query: "akkawi cheese",
    videoQuery: "جبن عكاوي مع نعناع",
  },
  {
    name: "شوفان بالحليب والموز",
    meal: "ريوك",
    styles: ["دايت"],
    ingredients: [
      { name: "شوفان", qty: "كوب" },
      { name: "حليب كامل الدسم", qty: "كوب" },
      { name: "موز", qty: "1 حبة" },
      { name: "عسل", qty: "ملعقة صغيرة" },
    ],
    query: "oatmeal banana",
    videoQuery: "شوفان بالحليب والموز",
  },
  {
    name: "توست جبن موزاريلا",
    meal: "ريوك",
    styles: ["غربي"],
    ingredients: [
      { name: "خبز توست", qty: "4 شرائح" },
      { name: "جبن موزاريلا", qty: "150 غم" },
      { name: "زبدة", qty: "ملعقة كبيرة" },
    ],
    query: "cheese toast",
    videoQuery: "توست جبن موزاريلا",
  },
  {
    name: "لبنة وزعتر",
    meal: "ريوك",
    styles: ["عربي"],
    ingredients: [
      { name: "لبنة", qty: "200 غم" },
      { name: "زعتر مجفف", qty: "ملعقة كبيرة" },
      { name: "زيت زيتون", qty: "ملعقة كبيرة" },
      { name: "خبز عربي", qty: "ربطة" },
    ],
    query: "labneh zaatar",
    videoQuery: "لبنة وزعتر",
  },
  {
    name: "فلافل",
    meal: "ريوك",
    styles: ["عربي"],
    ingredients: [
      { name: "حمص", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "كزبرة ناشفة", qty: "ملعقة صغيرة" },
      { name: "كمون", qty: "ملعقة صغيرة" },
      { name: "زيت طبخ", qty: "للقلي" },
    ],
    query: "falafel",
    videoQuery: "فلافل عراقية",
  },
  {
    name: "عجة خضار",
    meal: "ريوك",
    styles: ["عربي"],
    ingredients: [
      { name: "بيض", qty: "3 حبة" },
      { name: "بقدونس", qty: "قبضة" },
      { name: "بصل اخضر", qty: "2 عود" },
      { name: "فلفل اخضر", qty: "نصف حبة" },
      { name: "ملح", qty: "نصف ملعقة صغيرة" },
    ],
    query: "vegetable omelette",
    videoQuery: "عجة خضار",
  },
  {
    name: "جبن قشقوان مع طماطة",
    meal: "ريوك",
    styles: ["عربي"],
    ingredients: [
      { name: "جبن قشقوان", qty: "150 غم" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "خبز عربي", qty: "ربطة" },
    ],
    query: "kashkaval cheese",
    videoQuery: "جبن قشقوان مع طماطة",
  },
  {
    name: "تمن ودجاج",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "تمن", qty: "2 كوب" },
      { name: "دجاج", qty: "1 كغم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "ملعقة كبيرة" },
    ],
    query: "chicken rice",
    videoQuery: "تمن ودجاج عراقي",
  },
  {
    name: "مرق بطاطا",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "بطاطا", qty: "3 حبة" },
      { name: "طماطة", qty: "3 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "زيت طبخ", qty: "ملعقتان كبيرتان" },
      { name: "ملح", qty: "ملعقة صغيرة" },
    ],
    query: "potato stew",
    videoQuery: "مرق بطاطا عراقي",
  },
  {
    name: "مرق بامية",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "بامية", qty: "500 غم" },
      { name: "طماطة", qty: "3 حبة" },
      { name: "لحم غنم", qty: "400 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "ملعقة كبيرة" },
    ],
    query: "okra stew",
    videoQuery: "مرق بامية",
  },
  {
    name: "مرق سبانخ باللحم",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "سبانخ", qty: "حزمة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "لحم مفروم", qty: "300 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "ملعقة كبيرة" },
    ],
    query: "spinach stew",
    videoQuery: "مرق سبانخ باللحم",
  },
  {
    name: "مقلوبة باذنجان",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "تمن", qty: "2 كوب" },
      { name: "دجاج", qty: "1 كغم" },
      { name: "باذنجان", qty: "2 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات", qty: "ملعقة كبيرة" },
    ],
    query: "eggplant maqluba",
    videoQuery: "مقلوبة باذنجان",
  },
  {
    name: "كباب عراقي",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "لحم مفروم", qty: "500 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات مشاوي", qty: "ملعقة كبيرة" },
    ],
    query: "kebab",
    videoQuery: "كباب عراقي",
  },
  {
    name: "دولمة ورق عنب",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "ورق عنب معلب", qty: "علبة" },
      { name: "تمن", qty: "2 كوب" },
      { name: "لحم مفروم", qty: "300 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات دولمة", qty: "ملعقة كبيرة" },
    ],
    query: "stuffed grape leaves",
    videoQuery: "دولمة عراقية",
  },
  {
    name: "برياني",
    meal: "غداء",
    styles: ["شرقي"],
    ingredients: [
      { name: "تمن", qty: "2 كوب" },
      { name: "دجاج", qty: "700 غم" },
      { name: "بهار برياني", qty: "ملعقة كبيرة" },
      { name: "بصل", qty: "1 حبة" },
    ],
    query: "biryani",
    videoQuery: "برياني دجاج",
  },
  {
    name: "رز مقلي بالخضار",
    meal: "غداء",
    styles: ["شرقي"],
    ingredients: [
      { name: "تمن", qty: "2 كوب" },
      { name: "بيض", qty: "2 حبة" },
      { name: "جزر", qty: "1 حبة" },
      { name: "فلفل اخضر", qty: "1 حبة" },
      { name: "صلصة صويا", qty: "ملعقة كبيرة" },
      { name: "زيت سمسم", qty: "ملعقة كبيرة" },
    ],
    query: "fried rice",
    videoQuery: "رز مقلي بالخضار",
  },
  {
    name: "دجاج بالصويا",
    meal: "غداء",
    styles: ["شرقي"],
    ingredients: [
      { name: "دجاج", qty: "600 غم" },
      { name: "صلصة صويا", qty: "ملعقة كبيرة" },
      { name: "ثوم", qty: "2 فص" },
      { name: "فلفل اخضر", qty: "1 حبة" },
      { name: "زيت سمسم", qty: "ملعقة كبيرة" },
    ],
    query: "soy sauce chicken",
    videoQuery: "دجاج بالصويا",
  },
  {
    name: "باستا بولونيز",
    meal: "غداء",
    styles: ["غربي"],
    ingredients: [
      { name: "مكرونة قلم", qty: "400 غم" },
      { name: "لحم مفروم", qty: "300 غم" },
      { name: "معجون طماطة", qty: "ملعقتان كبيرتان" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "ملعقة صغيرة" },
    ],
    query: "bolognese pasta",
    videoQuery: "باستا بولونيز",
  },
  {
    name: "لازانيا",
    meal: "غداء",
    styles: ["غربي"],
    ingredients: [
      { name: "رقائق لازانيا", qty: "250 غم" },
      { name: "لحم مفروم", qty: "300 غم" },
      { name: "معجون طماطة", qty: "ملعقتان كبيرتان" },
      { name: "جبن موزاريلا", qty: "200 غم" },
    ],
    query: "lasagna",
    videoQuery: "لازانيا",
  },
  {
    name: "سمك مسكوف",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "سمك شبوط", qty: "1 كغم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "بهارات مشاوي", qty: "ملعقة كبيرة" },
    ],
    query: "masgouf fish",
    videoQuery: "سمك مسكوف",
  },
  {
    name: "شوربة عدس",
    meal: "غداء",
    styles: ["دايت"],
    ingredients: [
      { name: "عدس", qty: "كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "كمون", qty: "ملعقة صغيرة" },
      { name: "زيت طبخ", qty: "ملعقة كبيرة" },
    ],
    query: "lentil soup",
    videoQuery: "شوربة عدس",
  },
  {
    name: "دجاج مشوي",
    meal: "غداء",
    styles: ["دايت"],
    ingredients: [
      { name: "صدر دجاج", qty: "500 غم" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "بهارات مشاوي", qty: "ملعقة صغيرة" },
      { name: "زيت زيتون", qty: "ملعقة كبيرة" },
    ],
    query: "grilled chicken",
    videoQuery: "دجاج مشوي",
  },
  {
    name: "كبة برغل",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "برغل", qty: "2 كوب" },
      { name: "لحم مفروم", qty: "300 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات كبة", qty: "ملعقة كبيرة" },
    ],
    query: "kibbeh",
    videoQuery: "كبة برغل",
  },
  {
    name: "سلطة خضراء",
    meal: "عشاء",
    styles: ["دايت"],
    ingredients: [
      { name: "خيار", qty: "2 حبة" },
      { name: "خس", qty: "ربطة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "زيت زيتون", qty: "ملعقة كبيرة" },
    ],
    query: "green salad",
    videoQuery: "سلطة خضراء",
  },
  {
    name: "اومليت خضار",
    meal: "عشاء",
    styles: ["دايت"],
    ingredients: [
      { name: "بيض", qty: "2 حبة" },
      { name: "طماطة", qty: "1 حبة" },
      { name: "فلفل اخضر", qty: "نصف حبة" },
      { name: "ملح", qty: "نصف ملعقة صغيرة" },
    ],
    query: "omelette",
    videoQuery: "اومليت خضار",
  },
  {
    name: "بطاطا مقلية",
    meal: "عشاء",
    styles: ["غربي"],
    ingredients: [
      { name: "بطاطا", qty: "3 حبة" },
      { name: "زيت طبخ", qty: "للقلي" },
      { name: "ملح", qty: "ملعقة صغيرة" },
    ],
    query: "french fries",
    videoQuery: "بطاطا مقلية",
  },
  {
    name: "شاورما دجاج",
    meal: "عشاء",
    styles: ["شرقي"],
    ingredients: [
      { name: "دجاج", qty: "600 غم" },
      { name: "بهارات شاورما", qty: "ملعقة كبيرة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "خبز عربي", qty: "ربطة" },
    ],
    query: "chicken shawarma",
    videoQuery: "شاورما دجاج",
  },
  {
    name: "سندويش لبنة وخضار",
    meal: "عشاء",
    styles: ["دايت"],
    ingredients: [
      { name: "لبنة", qty: "150 غم" },
      { name: "خيار", qty: "1 حبة" },
      { name: "نعناع", qty: "قبضة" },
      { name: "خبز عربي", qty: "ربطة" },
    ],
    query: "labneh sandwich",
    videoQuery: "سندويش لبنة وخضار",
  },
  {
    name: "سلطة تونة",
    meal: "عشاء",
    styles: ["دايت"],
    ingredients: [
      { name: "تونة معلبة", qty: "علبة" },
      { name: "خس", qty: "ربطة" },
      { name: "خيار", qty: "1 حبة" },
      { name: "ليمون", qty: "1 حبة" },
    ],
    query: "tuna salad",
    videoQuery: "سلطة تونة",
  },
  {
    name: "بيتزا خضار",
    meal: "عشاء",
    styles: ["غربي"],
    ingredients: [
      { name: "خبز عربي", qty: "ربطة" },
      { name: "جبن موزاريلا", qty: "200 غم" },
      { name: "صلصة طماطة", qty: "3 ملاعق كبيرة" },
      { name: "فلفل اخضر", qty: "1 حبة" },
      { name: "فطر", qty: "150 غم" },
    ],
    query: "vegetable pizza",
    videoQuery: "بيتزا خضار",
  },
  {
    name: "فتوش",
    meal: "عشاء",
    styles: ["عربي"],
    ingredients: [
      { name: "خبز عربي", qty: "ربطة" },
      { name: "خيار", qty: "2 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بقدونس", qty: "قبضة" },
      { name: "سماق", qty: "ملعقة صغيرة" },
      { name: "زيت زيتون", qty: "ملعقة كبيرة" },
      { name: "ليمون", qty: "1 حبة" },
    ],
    query: "fattoush",
    videoQuery: "فتوش",
  },
  {
    name: "تبولة",
    meal: "عشاء",
    styles: ["عربي"],
    ingredients: [
      { name: "بقدونس", qty: "حزمة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بصل اخضر", qty: "2 عود" },
      { name: "برغل", qty: "نصف كوب" },
      { name: "ليمون", qty: "1 حبة" },
    ],
    query: "tabbouleh",
    videoQuery: "تبولة",
  },
  {
    name: "شوربة خضار",
    meal: "عشاء",
    styles: ["دايت"],
    ingredients: [
      { name: "جزر", qty: "2 حبة" },
      { name: "كرفس", qty: "2 عود" },
      { name: "زهرة", qty: "نصف رأس" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ملح", qty: "ملعقة صغيرة" },
    ],
    query: "vegetable soup",
    videoQuery: "شوربة خضار",
  },
  {
    name: "سمك مشوي",
    meal: "عشاء",
    styles: ["دايت"],
    ingredients: [
      { name: "فيليه سمك", qty: "500 غم" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "بهارات مشاوي", qty: "ملعقة كبيرة" },
      { name: "زيت زيتون", qty: "ملعقة كبيرة" },
    ],
    query: "grilled fish",
    videoQuery: "سمك مشوي",
  },
  {
    name: "برغر لحم",
    meal: "عشاء",
    styles: ["غربي"],
    ingredients: [
      { name: "لحم بقر", qty: "300 غم" },
      { name: "خبز توست", qty: "4 شرائح" },
      { name: "طماطة", qty: "1 حبة" },
      { name: "خس", qty: "ربطة" },
    ],
    query: "beef burger",
    videoQuery: "برغر لحم",
  },
  {
    name: "سلطة جرجير",
    meal: "عشاء",
    styles: ["دايت"],
    ingredients: [
      { name: "جرجير", qty: "ربطة" },
      { name: "طماطة", qty: "1 حبة" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "زيت زيتون", qty: "ملعقة كبيرة" },
    ],
    query: "arugula salad",
    videoQuery: "سلطة جرجير",
  },
];

const extraDishes = [
  {
    name: "كبسة دجاج",
    meal: "غداء",
    styles: ["عربي", "خليجي"],
    ingredients: [
      { name: "دجاج", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات كبسة", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "chicken kabsa",
    videoQuery: "طريقة كبسة دجاج",
  },
  {
    name: "كبسة لحم",
    meal: "غداء",
    styles: ["عربي", "خليجي"],
    ingredients: [
      { name: "لحم غنم", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات كبسة", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "lamb kabsa",
    videoQuery: "طريقة كبسة لحم",
  },
  {
    name: "برياني دجاج",
    meal: "غداء",
    styles: ["عربي", "شرقي"],
    ingredients: [
      { name: "دجاج", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات برياني", qty: "1 ملعقة" },
      { name: "لبن", qty: "1 كوب" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "chicken biryani",
    videoQuery: "طريقة برياني دجاج",
  },
  {
    name: "برياني لحم",
    meal: "غداء",
    styles: ["عربي", "شرقي"],
    ingredients: [
      { name: "لحم غنم", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات برياني", qty: "1 ملعقة" },
      { name: "لبن", qty: "1 كوب" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "lamb biryani",
    videoQuery: "طريقة برياني لحم",
  },
  {
    name: "مندي دجاج",
    meal: "غداء",
    styles: ["عربي", "خليجي"],
    ingredients: [
      { name: "دجاج", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات كبسة", qty: "1 ملعقة" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "chicken mandi",
    videoQuery: "طريقة مندي دجاج",
  },
  {
    name: "مندي لحم",
    meal: "غداء",
    styles: ["عربي", "خليجي"],
    ingredients: [
      { name: "لحم غنم", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات كبسة", qty: "1 ملعقة" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "lamb mandi",
    videoQuery: "طريقة مندي لحم",
  },
  {
    name: "مقلوبة دجاج",
    meal: "غداء",
    styles: ["عربي", "شرقي"],
    ingredients: [
      { name: "دجاج", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "باذنجان", qty: "2 حبة" },
      { name: "بطاطا", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "chicken maqluba",
    videoQuery: "طريقة مقلوبة دجاج",
  },
  {
    name: "مقلوبة زهرة",
    meal: "غداء",
    styles: ["عربي", "شرقي"],
    ingredients: [
      { name: "زهرة", qty: "1 رأس" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بطاطا", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "cauliflower maqluba",
    videoQuery: "طريقة مقلوبة زهرة",
  },
  {
    name: "مسكوف عراقي",
    meal: "غداء",
    styles: ["عراقي", "بحري"],
    ingredients: [
      { name: "فيليه سمك", qty: "1 كغم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "بهارات مشاوي", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "iraqi masgouf",
    videoQuery: "طريقة مسكوف عراقي",
  },
  {
    name: "قوزي عراقي",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "لحم غنم", qty: "1 كغم" },
      { name: "رز", qty: "2 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "quzi lamb rice",
    videoQuery: "طريقة قوزي عراقي",
  },
  {
    name: "تشريب لحم",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "لحم غنم", qty: "500 غم" },
      { name: "خبز عربي", qty: "ربطة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "tashreeb lamb",
    videoQuery: "طريقة تشريب لحم",
  },
  {
    name: "تشريب دجاج",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "دجاج", qty: "500 غم" },
      { name: "خبز عربي", qty: "ربطة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "chicken tashreeb",
    videoQuery: "طريقة تشريب دجاج",
  },
  {
    name: "قيمة نجفية",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "لحم مفروم", qty: "500 غم" },
      { name: "حمص", qty: "1 كوب" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "najafi qeema",
    videoQuery: "طريقة قيمة نجفية",
  },
  {
    name: "باچة عراقية",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "لحم غنم", qty: "1 كغم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ثوم", qty: "3 فصوص" },
      { name: "بهارات", qty: "1 ملعقة" },
      { name: "ليمون", qty: "1 حبة" },
    ],
    query: "iraqi pacha",
    videoQuery: "طريقة باچة عراقية",
  },
  {
    name: "مرق فاصوليا خضراء",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "فاصوليا خضراء", qty: "400 غم" },
      { name: "طماطة", qty: "3 حبات" },
      { name: "بصل", qty: "1 حبة" },
      { name: "لحم غنم", qty: "300 غم" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "green beans stew",
    videoQuery: "مرق فاصوليا خضراء",
  },
  {
    name: "مرق باذنجان",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "باذنجان", qty: "3 حبات" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "لحم غنم", qty: "300 غم" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "eggplant stew",
    videoQuery: "مرق باذنجان عراقي",
  },
  {
    name: "مرق عدس",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "عدس", qty: "1 كوب" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "lentil stew",
    videoQuery: "مرق عدس",
  },
  {
    name: "شوربة عدس",
    meal: "عشاء",
    styles: ["عربي", "دايت"],
    ingredients: [
      { name: "عدس", qty: "1 كوب" },
      { name: "جزر", qty: "2 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "كركم", qty: "1 ملعقة صغيرة" },
      { name: "بهارات", qty: "1 ملعقة صغيرة" },
    ],
    query: "lentil soup",
    videoQuery: "شوربة عدس",
  },
  {
    name: "شوربة دجاج",
    meal: "عشاء",
    styles: ["عربي", "دايت"],
    ingredients: [
      { name: "دجاج", qty: "400 غم" },
      { name: "جزر", qty: "2 حبة" },
      { name: "كرفس", qty: "1 عود" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "1 ملعقة صغيرة" },
    ],
    query: "chicken soup",
    videoQuery: "شوربة دجاج",
  },
  {
    name: "شوربة حريرة",
    meal: "عشاء",
    styles: ["عربي"],
    ingredients: [
      { name: "عدس", qty: "1 كوب" },
      { name: "حمص", qty: "1 كوب" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "لحم غنم", qty: "300 غم" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "harira soup",
    videoQuery: "شوربة حريرة",
  },
  {
    name: "دولمة عراقية",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "ورق عنب معلب", qty: "1 علبة" },
      { name: "رز", qty: "1 كوب" },
      { name: "لحم مفروم", qty: "400 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات دولمة", qty: "1 ملعقة" },
    ],
    query: "iraqi dolma",
    videoQuery: "طريقة دولمة عراقية",
  },
  {
    name: "محشي كوسا",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "كوسا", qty: "6 حبات" },
      { name: "رز", qty: "1 كوب" },
      { name: "لحم مفروم", qty: "400 غم" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "stuffed zucchini",
    videoQuery: "طريقة محشي كوسا",
  },
  {
    name: "محشي باذنجان",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "باذنجان", qty: "4 حبات" },
      { name: "رز", qty: "1 كوب" },
      { name: "لحم مفروم", qty: "400 غم" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "stuffed eggplant",
    videoQuery: "طريقة محشي باذنجان",
  },
  {
    name: "محشي فلفل اخضر",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "فلفل اخضر", qty: "4 حبات" },
      { name: "رز", qty: "1 كوب" },
      { name: "لحم مفروم", qty: "400 غم" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "stuffed bell pepper",
    videoQuery: "طريقة محشي فلفل اخضر",
  },
  {
    name: "شيش طاووق",
    meal: "عشاء",
    styles: ["شامي"],
    ingredients: [
      { name: "صدر دجاج", qty: "500 غم" },
      { name: "ثوم", qty: "3 فصوص" },
      { name: "لبن", qty: "1 كوب" },
      { name: "بهارات مشاوي", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "shish tawook",
    videoQuery: "طريقة شيش طاووق",
  },
  {
    name: "شاورما دجاج",
    meal: "عشاء",
    styles: ["شامي"],
    ingredients: [
      { name: "دجاج", qty: "500 غم" },
      { name: "ثوم", qty: "3 فصوص" },
      { name: "بهارات شاورما", qty: "1 ملعقة" },
      { name: "لبن", qty: "1 كوب" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "chicken shawarma",
    videoQuery: "طريقة شاورما دجاج",
  },
  {
    name: "شاورما لحم",
    meal: "عشاء",
    styles: ["شامي"],
    ingredients: [
      { name: "لحم غنم", qty: "500 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات شاورما", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
      { name: "ليمون", qty: "1 حبة" },
    ],
    query: "beef shawarma",
    videoQuery: "طريقة شاورما لحم",
  },
  {
    name: "كبة موصل",
    meal: "غداء",
    styles: ["عراقي"],
    ingredients: [
      { name: "برغل", qty: "2 كوب" },
      { name: "لحم مفروم", qty: "500 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات كبة", qty: "1 ملعقة" },
      { name: "سمن", qty: "1 ملعقة" },
    ],
    query: "mosul kibbeh",
    videoQuery: "طريقة كبة موصل",
  },
  {
    name: "كبة حلبية",
    meal: "غداء",
    styles: ["شامي"],
    ingredients: [
      { name: "برغل", qty: "2 كوب" },
      { name: "لحم مفروم", qty: "500 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات كبة", qty: "1 ملعقة" },
      { name: "سمن", qty: "1 ملعقة" },
    ],
    query: "kibbeh halab",
    videoQuery: "طريقة كبة حلبية",
  },
  {
    name: "كبة مقلية",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "برغل", qty: "2 كوب" },
      { name: "لحم مفروم", qty: "400 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات كبة", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "للقلي" },
    ],
    query: "fried kibbeh",
    videoQuery: "طريقة كبة مقلية",
  },
  {
    name: "كبة لبنية",
    meal: "غداء",
    styles: ["شامي"],
    ingredients: [
      { name: "لبن", qty: "2 كوب" },
      { name: "برغل", qty: "1 كوب" },
      { name: "لحم مفروم", qty: "300 غم" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "نعناع مجفف", qty: "1 ملعقة" },
    ],
    query: "kibbeh yogurt",
    videoQuery: "طريقة كبة لبنية",
  },
  {
    name: "مجدرة",
    meal: "غداء",
    styles: ["شامي"],
    ingredients: [
      { name: "عدس", qty: "1 كوب" },
      { name: "رز", qty: "1 كوب" },
      { name: "بصل", qty: "2 حبة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
      { name: "كمون", qty: "1 ملعقة صغيرة" },
    ],
    query: "mujaddara",
    videoQuery: "طريقة مجدرة",
  },
  {
    name: "رز بالشعيرية",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "رز", qty: "2 كوب" },
      { name: "شعيرية", qty: "نصف كوب" },
      { name: "زيت طبخ", qty: "1 ملعقة" },
      { name: "ملح", qty: "1 ملعقة صغيرة" },
    ],
    query: "rice vermicelli",
    videoQuery: "رز بالشعيرية",
  },
  {
    name: "رز بالبازلاء والجزر",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "رز", qty: "2 كوب" },
      { name: "بازلاء", qty: "1 كوب" },
      { name: "جزر", qty: "2 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "زيت طبخ", qty: "1 ملعقة" },
    ],
    query: "rice peas carrots",
    videoQuery: "رز بالبازلاء والجزر",
  },
  {
    name: "برغل بالخضار",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "برغل", qty: "2 كوب" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بصل", qty: "1 حبة" },
      { name: "كوسا", qty: "1 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
    ],
    query: "bulgur pilaf",
    videoQuery: "برغل بالخضار",
  },
  {
    name: "معكرونة بالبشاميل",
    meal: "غداء",
    styles: ["عربي", "غربي"],
    ingredients: [
      { name: "مكرونة قلم", qty: "300 غم" },
      { name: "حليب كامل الدسم", qty: "2 كوب" },
      { name: "زبدة", qty: "2 ملعقة" },
      { name: "طحين", qty: "2 ملعقة" },
      { name: "لحم مفروم", qty: "300 غم" },
    ],
    query: "macaroni bechamel",
    videoQuery: "معكرونة بالبشاميل",
  },
  {
    name: "معكرونة بالصلصة",
    meal: "غداء",
    styles: ["غربي"],
    ingredients: [
      { name: "مكرونة سباغيتي", qty: "300 غم" },
      { name: "صلصة طماطة", qty: "1 كوب" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "spaghetti tomato sauce",
    videoQuery: "معكرونة بالصلصة",
  },
  {
    name: "لازانيا",
    meal: "غداء",
    styles: ["غربي"],
    ingredients: [
      { name: "رقائق لازانيا", qty: "250 غم" },
      { name: "لحم مفروم", qty: "400 غم" },
      { name: "حليب كامل الدسم", qty: "2 كوب" },
      { name: "جبن موزاريلا", qty: "200 غم" },
      { name: "صلصة طماطة", qty: "1 كوب" },
    ],
    query: "lasagna",
    videoQuery: "لازانيا",
  },
  {
    name: "سمبوسة لحم",
    meal: "عشاء",
    styles: ["عربي"],
    ingredients: [
      { name: "طحين", qty: "2 كوب" },
      { name: "لحم مفروم", qty: "300 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "للقلي" },
    ],
    query: "meat samosa",
    videoQuery: "سمبوسة لحم",
  },
  {
    name: "سمبوسة جبن",
    meal: "عشاء",
    styles: ["عربي"],
    ingredients: [
      { name: "طحين", qty: "2 كوب" },
      { name: "جبن موزاريلا", qty: "200 غم" },
      { name: "زيت طبخ", qty: "للقلي" },
      { name: "بصل اخضر", qty: "2 عود" },
    ],
    query: "cheese samosa",
    videoQuery: "سمبوسة جبن",
  },
  {
    name: "فطائر سبانخ",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "سبانخ", qty: "300 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "طحين", qty: "2 كوب" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
      { name: "سماق", qty: "1 ملعقة" },
    ],
    query: "spinach pies",
    videoQuery: "فطائر سبانخ",
  },
  {
    name: "فطائر جبن",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "جبن عكاوي", qty: "200 غم" },
      { name: "طحين", qty: "2 كوب" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
      { name: "بقدونس", qty: "نصف كوب" },
    ],
    query: "cheese pies",
    videoQuery: "فطائر جبن",
  },
  {
    name: "مناقيش زعتر",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "خبز عربي", qty: "ربطة" },
      { name: "زعتر مجفف", qty: "2 ملعقة" },
      { name: "زيت زيتون", qty: "2 ملعقة" },
    ],
    query: "manakish zaatar",
    videoQuery: "مناقيش زعتر",
  },
  {
    name: "مناقيش جبن",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "خبز عربي", qty: "ربطة" },
      { name: "جبن عكاوي", qty: "200 غم" },
      { name: "زيت طبخ", qty: "1 ملعقة" },
    ],
    query: "manakish cheese",
    videoQuery: "مناقيش جبن",
  },
  {
    name: "فول مدمس",
    meal: "فطور",
    styles: ["عربي"],
    ingredients: [
      { name: "فول معلب", qty: "1 علبة" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "كمون", qty: "1 ملعقة صغيرة" },
      { name: "زيت زيتون", qty: "1 ملعقة" },
    ],
    query: "foul medames",
    videoQuery: "فول مدمس",
  },
  {
    name: "حمص بالطحينة",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "حمص", qty: "1 كوب" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "زيت زيتون", qty: "2 ملعقة" },
      { name: "كمون", qty: "1 ملعقة صغيرة" },
    ],
    query: "hummus tahini",
    videoQuery: "حمص بالطحينة",
  },
  {
    name: "فتة حمص",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "حمص", qty: "1 كوب" },
      { name: "خبز عربي", qty: "ربطة" },
      { name: "لبن", qty: "1 كوب" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "سمن", qty: "1 ملعقة" },
    ],
    query: "hummus fattah",
    videoQuery: "فتة حمص",
  },
  {
    name: "فتة دجاج",
    meal: "غداء",
    styles: ["شامي"],
    ingredients: [
      { name: "دجاج", qty: "400 غم" },
      { name: "خبز عربي", qty: "ربطة" },
      { name: "لبن", qty: "1 كوب" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "سمن", qty: "1 ملعقة" },
    ],
    query: "chicken fattah",
    videoQuery: "فتة دجاج",
  },
  {
    name: "متبل باذنجان",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "باذنجان", qty: "2 حبة" },
      { name: "لبن", qty: "1 كوب" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "زيت زيتون", qty: "1 ملعقة" },
    ],
    query: "mutabbal eggplant",
    videoQuery: "متبل باذنجان",
  },
  {
    name: "بابا غنوج",
    meal: "فطور",
    styles: ["شامي"],
    ingredients: [
      { name: "باذنجان", qty: "2 حبة" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "زيت زيتون", qty: "2 ملعقة" },
      { name: "بقدونس", qty: "نصف كوب" },
    ],
    query: "baba ghanoush",
    videoQuery: "بابا غنوج",
  },
  {
    name: "سلطة روب وخيار",
    meal: "عشاء",
    styles: ["عربي", "دايت"],
    ingredients: [
      { name: "خيار", qty: "2 حبة" },
      { name: "لبن", qty: "1 كوب" },
      { name: "ثوم", qty: "1 فص" },
      { name: "نعناع مجفف", qty: "1 ملعقة" },
    ],
    query: "cucumber yogurt salad",
    videoQuery: "سلطة روب وخيار",
  },
  {
    name: "سلطة عربية",
    meal: "عشاء",
    styles: ["عربي", "دايت"],
    ingredients: [
      { name: "طماطة", qty: "2 حبة" },
      { name: "خيار", qty: "2 حبة" },
      { name: "خس", qty: "1 رأس" },
      { name: "بصل", qty: "1 حبة" },
      { name: "ليمون", qty: "1 حبة" },
    ],
    query: "arabic salad",
    videoQuery: "سلطة عربية",
  },
  {
    name: "سلطة بطاطا",
    meal: "عشاء",
    styles: ["عربي"],
    ingredients: [
      { name: "بطاطا", qty: "3 حبات" },
      { name: "مايونيز", qty: "3 ملعقة" },
      { name: "بصل اخضر", qty: "1 عود" },
      { name: "ملح", qty: "1 ملعقة صغيرة" },
    ],
    query: "potato salad",
    videoQuery: "سلطة بطاطا",
  },
  {
    name: "سمك مقلي",
    meal: "غداء",
    styles: ["بحري"],
    ingredients: [
      { name: "فيليه سمك", qty: "500 غم" },
      { name: "طحين", qty: "1 كوب" },
      { name: "زيت طبخ", qty: "للقلي" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "ملح", qty: "1 ملعقة صغيرة" },
    ],
    query: "fried fish",
    videoQuery: "سمك مقلي",
  },
  {
    name: "سمك تنور",
    meal: "غداء",
    styles: ["بحري", "عراقي"],
    ingredients: [
      { name: "فيليه سمك", qty: "500 غم" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "ثوم", qty: "2 فصوص" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
      { name: "ليمون", qty: "1 حبة" },
    ],
    query: "baked fish",
    videoQuery: "سمك تنور",
  },
  {
    name: "دجاج مشوي",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "دجاج", qty: "1 كغم" },
      { name: "ثوم", qty: "3 فصوص" },
      { name: "ليمون", qty: "1 حبة" },
      { name: "بهارات مشاوي", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "2 ملعقة" },
    ],
    query: "grilled chicken",
    videoQuery: "دجاج مشوي",
  },
  {
    name: "كباب دجاج",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "دجاج مفروم", qty: "500 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "بهارات مشاوي", qty: "1 ملعقة" },
      { name: "بقدونس", qty: "نصف كوب" },
      { name: "زيت طبخ", qty: "1 ملعقة" },
    ],
    query: "chicken kebab",
    videoQuery: "كباب دجاج",
  },
  {
    name: "كفتة بالفرن",
    meal: "غداء",
    styles: ["عربي"],
    ingredients: [
      { name: "لحم مفروم", qty: "500 غم" },
      { name: "بصل", qty: "1 حبة" },
      { name: "طماطة", qty: "2 حبة" },
      { name: "بهارات", qty: "1 ملعقة" },
      { name: "زيت طبخ", qty: "1 ملعقة" },
    ],
    query: "kofta bake",
    videoQuery: "كفتة بالفرن",
  },
  {
    name: "كنافة",
    meal: "حلويات",
    styles: ["عربي"],
    ingredients: [
      { name: "سميد", qty: "1 كوب" },
      { name: "سكر", qty: "1 كوب" },
      { name: "زبدة", qty: "3 ملعقة" },
      { name: "جبن عكاوي", qty: "200 غم" },
      { name: "حليب مكثف", qty: "1 علبة" },
    ],
    query: "kunafa",
    videoQuery: "طريقة كنافة",
  },
  {
    name: "رز بحليب",
    meal: "حلويات",
    styles: ["عربي"],
    ingredients: [
      { name: "رز", qty: "نصف كوب" },
      { name: "حليب كامل الدسم", qty: "3 كوب" },
      { name: "سكر", qty: "نصف كوب" },
      { name: "قرفة", qty: "1 ملعقة صغيرة" },
    ],
    query: "rice pudding",
    videoQuery: "رز بحليب",
  },
];

const expandedDishCatalog = [...dishCatalog, ...extraDishes];

const dishIds = new Set();
const dishes = expandedDishCatalog.map((dish, index) => {
  const paletteEntry = palette[(index + 4) % palette.length];
  const videoQuery = dish.videoQuery || dish.name;
  const baseId = slugify(dish.query || dish.name || `dish-${index + 1}`);
  let id = baseId;
  let counter = 1;
  while (dishIds.has(id)) {
    counter += 1;
    id = `${baseId}-${counter}`;
  }
  dishIds.add(id);
  const steps =
    dish.steps && dish.steps.length ? dish.steps : defaultDishSteps(dish);
  const styles =
    dish.styles && dish.styles.length ? dish.styles : ["عربي"];
  return {
    ...dish,
    id,
    steps,
    styles,
    image: buildDishImageUrl(),
    videoUrl: buildYouTubeSearchUrl(videoQuery),
    embedUrl: buildYouTubeEmbedUrl(videoQuery),
    color: paletteEntry.color,
    accent: paletteEntry.accent,
  };
});





const cart = new Map();

const normalizeName = (value) =>
  (value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const normalizePhone = (value) => (value || "").replace(/\D/g, "");

const productById = new Map(products.map((product) => [product.id, product]));
const productNameIndex = new Map(
  products.map((product) => [normalizeName(product.name), product])
);

const findProductForIngredient = (name) => {
  if (!name) return null;
  const normalized = normalizeName(name);
  if (productNameIndex.has(normalized)) {
    return productNameIndex.get(normalized);
  }
  return (
    products.find((product) => {
      const productName = normalizeName(product.name);
      return (
        productName.includes(normalized) || normalized.includes(productName)
      );
    }) || null
  );
};

const ITEMS_PER_PAGE = 40;
let currentPage = 1;
let searchQuery = "";
const FRIDGE_ITEMS_PER_PAGE = 40;
let fridgeCurrentPage = 1;
let fridgeSearchQuery = "";

const formatter = new Intl.NumberFormat("ar-IQ");

const productGrid = document.getElementById("productGrid");
const fridgeList = document.getElementById("fridgeList");
const fridgeSearch = document.getElementById("fridgeSearch");
const fridgeStats = document.getElementById("fridgeStats");
const fridgePagination = document.getElementById("fridgePagination");
const fridgeIngredients = document.getElementById("fridgeIngredients");
const dishResults = document.getElementById("dishResults");
const productSearch = document.getElementById("productSearch");
const productStats = document.getElementById("productStats");
const productPagination = document.getElementById("productPagination");
const cartItems = document.getElementById("cartItems");
const invoiceSummary = document.getElementById("invoiceSummary");
const invoicePreview = document.getElementById("invoicePreview");
const downloadInvoice = document.getElementById("downloadInvoice");
const toast = document.getElementById("toast");
const dishModal = document.getElementById("dishModal");
const dishModalBody = document.getElementById("dishModalBody");
const dishModalClose = document.getElementById("dishModalClose");
const loginForm = document.getElementById("loginForm");
const userNameInput = document.getElementById("userName");
const userPhoneInput = document.getElementById("userPhone");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const headerLogin = document.getElementById("headerLogin");
const headerLogout = document.getElementById("headerLogout");
const currentUserName = document.getElementById("currentUserName");
const currentUserPhone = document.getElementById("currentUserPhone");
const currentUserRole = document.getElementById("currentUserRole");
const accountStatus = document.getElementById("accountStatus");
const adminPanel = document.getElementById("adminPanel");
const adminUserCount = document.getElementById("adminUserCount");
const adminVisitCount = document.getElementById("adminVisitCount");
const adminUsersList = document.getElementById("adminUsersList");
let activeDishId = null;
let currentUser = null;
let totalVisits = 0;

const cartCount = document.getElementById("cartCount");
const fridgeCount = document.getElementById("fridgeCount");
const readyDishCount = document.getElementById("readyDishCount");

const todayDate = document.getElementById("todayDate");

const svgData = (label, color, accent) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${color}"/>
        <stop offset="100%" stop-color="${accent}"/>
      </linearGradient>
    </defs>
    <rect width="420" height="260" rx="28" fill="url(#g)"/>
    <circle cx="80" cy="70" r="36" fill="rgba(255,255,255,0.25)"/>
    <circle cx="340" cy="210" r="52" fill="rgba(255,255,255,0.18)"/>
    <text x="210" y="150" text-anchor="middle" font-size="38" fill="#1b2c2d" font-family="Tajawal, sans-serif">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const formatPrice = (value) => `${formatter.format(value)} د.ع`;

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
};

const storageKeys = {
  dishes: "myKitchenDishes",
  fridge: "myKitchenFridge",
};

const authKeys = {
  users: "myKitchenUsers",
  currentUser: "myKitchenCurrentUser",
  visits: "myKitchenVisits",
};

const ADMIN_PHONE = "07817602170";

const storeJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Storage error:", error);
  }
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

const getUsers = () => getStoredJson(authKeys.users, []);
const saveUsers = (users) => storeJson(authKeys.users, users);

const createUserId = () =>
  `user-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

const formatDate = (value) => {
  if (!value) return "-";
  try {
    return new Date(value).toLocaleDateString("ar-IQ", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    return "-";
  }
};

const trackVisit = () => {
  const current = Number(getStoredJson(authKeys.visits, 0)) || 0;
  const next = current + 1;
  storeJson(authKeys.visits, next);
  return next;
};

const imageCacheKeys = {
  products: "myKitchenProductImages",
  dishes: "myKitchenDishImages",
};

const fetchWikipediaImage = async (query) => {
  if (!query) return "";
  try {
    const searchUrl =
      "https://en.wikipedia.org/w/api.php?action=query&list=search" +
      `&srsearch=${encodeURIComponent(query)}` +
      "&format=json&origin=*";
    const searchResponse = await fetch(searchUrl);
    if (!searchResponse.ok) return "";
    const searchData = await searchResponse.json();
    const title = searchData?.query?.search?.[0]?.title;
    if (!title) return "";

    const imageUrl =
      "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages" +
      `&titles=${encodeURIComponent(title)}` +
      "&piprop=thumbnail&pithumbsize=600&format=json&origin=*";
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) return "";
    const imageData = await imageResponse.json();
    const pages = imageData?.query?.pages || {};
    const page = Object.values(pages)[0];
    return page?.thumbnail?.source || "";
  } catch (error) {
    return "";
  }
};

const runWithConcurrency = async (tasks, limit) => {
  let index = 0;
  const workers = new Array(limit).fill(0).map(async () => {
    while (index < tasks.length) {
      const task = tasks[index];
      index += 1;
      await task();
    }
  });
  await Promise.all(workers);
};

const resolveImages = async () => {
  const productCache = new Map(
    Object.entries(getStoredJson(imageCacheKeys.products, {}))
  );
  const dishCache = new Map(
    Object.entries(getStoredJson(imageCacheKeys.dishes, {}))
  );
  const needsFetch =
    products.some((product) => !productCache.has(product.id)) ||
    dishes.some((dish) => !dishCache.has(dish.id));

  const productTasks = products.map((product) => async () => {
    if (product.image) return;
    const cached = productCache.get(product.id);
    if (cached) {
      product.image = cached;
      return;
    }
    const url = await fetchWikipediaImage(product.query);
    if (url) {
      product.image = url;
      productCache.set(product.id, url);
    }
  });

  const dishTasks = dishes.map((dish) => async () => {
    if (dish.image) return;
    const cached = dishCache.get(dish.id);
    if (cached) {
      dish.image = cached;
      return;
    }
    const query = dish.query ? `${dish.query} dish` : dish.name;
    const url = await fetchWikipediaImage(query);
    if (url) {
      dish.image = url;
      dishCache.set(dish.id, url);
    }
  });

  if (!needsFetch) {
    await runWithConcurrency([...productTasks, ...dishTasks], 6);
    renderProducts();
    renderDishes();
    renderCart();
    if (activeDishId) {
      openDishModal(activeDishId);
    }
    persistDishes();
    return;
  }

  showToast("جاري تحديث الصور بدقة...");
  await runWithConcurrency([...productTasks, ...dishTasks], 6);
  storeJson(imageCacheKeys.products, Object.fromEntries(productCache));
  storeJson(imageCacheKeys.dishes, Object.fromEntries(dishCache));
  renderProducts();
  renderDishes();
  renderCart();
  if (activeDishId) {
    openDishModal(activeDishId);
  }
  persistDishes();
  showToast("تم تحديث الصور لتطابق العناصر.");
};

const persistDishes = () => storeJson(storageKeys.dishes, dishes);
const persistFridge = () => {
  const state = exportFridgeState();
  if (currentUser) {
    const users = getUsers();
    const index = users.findIndex((user) => user.id === currentUser.id);
    if (index !== -1) {
      users[index].fridge = state;
      users[index].lastFridgeUpdate = new Date().toISOString();
      currentUser = users[index];
      saveUsers(users);
      storeJson(authKeys.currentUser, currentUser.id);
    }
  } else {
    storeJson(storageKeys.fridge, state);
  }
};

const attachImageFallbacks = (container) => {
  container.querySelectorAll("img[data-fallback]").forEach((img) => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = "true";

    const fallback = img.dataset.fallback;
    const remote = img.dataset.remote;

    if (remote) {
      const probe = new Image();
      probe.referrerPolicy = "no-referrer";
      probe.onload = () => {
        img.src = remote;
      };
      probe.onerror = () => {
        if (fallback && img.src !== fallback) {
          img.src = fallback;
        }
      };
      probe.src = remote;
    } else {
      img.addEventListener("error", () => {
        if (fallback && img.src !== fallback) {
          img.src = fallback;
        }
      });
    }
  });
};

const exportFridgeState = () =>
  fridgeItems.map((item) => ({
    id: item.id,
    name: item.name,
    unit: item.unit,
    quantity: item.quantity,
    inFridge: item.inFridge,
  }));

const resetFridgeToDefault = () => {
  fridgeItems.forEach((item) => {
    const quantity = defaultFridgeStock.get(item.id) || 0;
    item.quantity = quantity;
    item.inFridge = quantity > 0;
  });
};

const applyFridgeState = (state) => {
  if (!state || state.length === 0) {
    resetFridgeToDefault();
    return;
  }
  const map = new Map(state.map((item) => [item.id, item]));
  fridgeItems.forEach((item) => {
    const saved = map.get(item.id);
    if (saved) {
      item.quantity = Number(saved.quantity) || 0;
      item.inFridge = Boolean(saved.inFridge) && item.quantity > 0;
    } else {
      item.quantity = 0;
      item.inFridge = false;
    }
  });
};

const setCurrentUser = (user) => {
  currentUser = user;
  if (user) {
    storeJson(authKeys.currentUser, user.id);
  } else {
    localStorage.removeItem(authKeys.currentUser);
  }
};

const loadCurrentUser = () => {
  const storedId = getStoredJson(authKeys.currentUser, "");
  if (!storedId) return null;
  const users = getUsers();
  const user = users.find((entry) => entry.id === storedId);
  if (!user) {
    localStorage.removeItem(authKeys.currentUser);
    return null;
  }
  currentUser = user;
  return user;
};

const loadFridgeForUser = (user) => {
  if (user?.fridge?.length) {
    applyFridgeState(user.fridge);
    return;
  }
  const stored = getStoredJson(storageKeys.fridge, null);
  if (stored?.length) {
    applyFridgeState(stored);
  } else {
    resetFridgeToDefault();
  }
};

const renderAuth = () => {
  if (currentUser) {
    if (loginForm) loginForm.hidden = true;
    if (logoutButton) logoutButton.hidden = false;
    if (headerLogin) headerLogin.hidden = true;
    if (headerLogout) headerLogout.hidden = false;
    if (currentUserName) currentUserName.textContent = currentUser.name;
    if (currentUserPhone) currentUserPhone.textContent = currentUser.phone;
    if (currentUserRole) {
      currentUserRole.textContent = currentUser.isAdmin
        ? "صلاحية: ادمن"
        : "صلاحية: مستخدم";
    }
    if (accountStatus) {
      accountStatus.textContent = "تم تسجيل الدخول بنجاح.";
    }
  } else {
    if (loginForm) loginForm.hidden = false;
    if (logoutButton) logoutButton.hidden = true;
    if (headerLogin) headerLogin.hidden = false;
    if (headerLogout) headerLogout.hidden = true;
    if (currentUserName) currentUserName.textContent = "—";
    if (currentUserPhone) currentUserPhone.textContent = "—";
    if (currentUserRole) currentUserRole.textContent = "غير مسجل";
    if (accountStatus) {
      accountStatus.textContent = "سجّل دخولك لحفظ مخزون الثلاجة بشكل منفصل.";
    }
  }
  if (adminPanel) {
    adminPanel.hidden = !currentUser?.isAdmin;
  }
};

const renderAdminDashboard = () => {
  if (!adminPanel || !currentUser?.isAdmin) return;
  const users = getUsers();
  if (adminUserCount) adminUserCount.textContent = users.length;
  if (adminVisitCount) adminVisitCount.textContent = totalVisits;
  if (!adminUsersList) return;

  if (users.length === 0) {
    adminUsersList.innerHTML =
      '<div class="product-empty">لا يوجد مستخدمون بعد.</div>';
    return;
  }

  adminUsersList.innerHTML = users
    .map((user) => {
      const fridgeCount = Array.isArray(user.fridge)
        ? user.fridge.filter((item) => item.inFridge && item.quantity > 0).length
        : 0;
      return `
        <div class="admin-user">
          <div>
            <div class="admin-user__name">${user.name}</div>
            <div class="admin-user__meta">${user.phone}</div>
          </div>
          <div class="admin-user__stats">
            <span class="pill">مخزون: ${fridgeCount}</span>
            <span class="pill">اخر دخول: ${formatDate(
              user.lastLogin || user.createdAt
            )}</span>
          </div>
        </div>
      `;
    })
    .join("");
};

const openDishModal = (dishId) => {
  if (!dishModal || !dishModalBody) return;
  const dish = dishes.find((entry) => entry.id === dishId);
  if (!dish) return;
  activeDishId = dishId;

  const available = getAvailableIngredients();
  const hasInventory = available.size > 0;
  const ingredientNames = dish.ingredients.map((ingredient) => ingredient.name);
  const missing = ingredientNames.filter(
    (ingredient) => !available.has(ingredient)
  );
  const isReady = hasInventory && missing.length === 0;
  const statusText = !hasInventory
    ? "فعّلي المخزون لمعرفة التوفر"
    : isReady
      ? "كل المكونات متوفرة"
      : `ينقصك ${missing.length} مكونات`;
  const statusClass = isReady ? "ready" : "not-ready";
  const missingHint =
    missing.length > 0 ? " اضغطي على المكونات الناقصة لاضافتها للسلة." : "";
  const missingText = !hasInventory
    ? "فعّلي مخزون الثلاجة ليتم التحقق من المكونات."
    : missing.length === 0
      ? "كل المكونات متوفرة في الثلاجة."
      : `المكونات الناقصة: ${missing.join("، ")}`;
  const missingClass = !hasInventory ? "waiting" : missing.length === 0 ? "ready" : "";
  const missingItemsHtml =
    missing.length === 0
      ? `<div class="missing-item ready">
          <span>لا يوجد نقص</span>
          <span class="pill">جاهز</span>
        </div>`
      : missing
          .map((name) => {
            const product = findProductForIngredient(name);
            if (!product) {
              return `
                <div class="missing-item">
                  <span>${name}</span>
                  <span class="pill">غير متوفر في قائمة الشراء</span>
                </div>
              `;
            }
            return `
              <div class="missing-item">
                <div>
                  <div class="missing-name">${name}</div>
                  <div class="missing-store">${product.store}</div>
                </div>
                <div class="missing-meta">
                  <span class="price">${formatPrice(product.price)} / ${product.unit}</span>
                  <button class="btn ghost small add-missing" data-product="${product.id}" data-name="${product.name}">
                    اضف للسلة
                  </button>
                </div>
              </div>
            `;
          })
          .join("");
  const fallback = svgData(dish.name, dish.color, dish.accent);
  const tags = [
    `<span class="tag meal">${dish.meal}</span>`,
    ...dish.styles.map((style) => `<span class="tag style">${style}</span>`),
  ].join("");
  const steps =
    dish.steps && dish.steps.length ? dish.steps : defaultDishSteps(dish);
  const videoQuery = dish.videoQuery || dish.name;
  const videoUrl = dish.videoUrl || buildYouTubeSearchUrl(videoQuery);
  const embedUrl = dish.embedUrl || buildYouTubeEmbedUrl(videoQuery);
  const ingredientsHtml = dish.ingredients
    .map((ingredient) => {
      const isAvailable = available.has(ingredient.name);
      return `
        <div class="detail-ingredient ${isAvailable ? "available" : "missing"}">
          <span>${ingredient.name}</span>
          <span class="ingredient-qty">${ingredient.qty}</span>
        </div>
      `;
    })
    .join("");
  const stepsHtml = steps.map((step) => `<li>${step}</li>`).join("");

  dishModalBody.innerHTML = `
    <div class="dish-modal__hero">
      <img
        src="${fallback}"
        data-remote="${dish.image}"
        data-fallback="${fallback}"
        alt="${dish.name}"
        loading="lazy"
        referrerpolicy="no-referrer"
      />
      <div class="dish-modal__meta">
        <div class="dish-tags">${tags}</div>
        <h3>${dish.name}</h3>
        <p>${dish.meal} • ${dish.styles.join("، ")}</p>
        <span class="dish-modal__status ${statusClass}">${statusText}</span>
      </div>
    </div>
    <div class="dish-modal__section">
      <h4>المكونات والكميات</h4>
      <div class="detail-ingredients">${ingredientsHtml}</div>
      <div class="detail-missing ${missingClass}">${missingText}${missingHint}</div>
      <div class="missing-list">${missingItemsHtml}</div>
    </div>
    <div class="dish-modal__section">
      <h4>طريقة التحضير</h4>
      <ol class="detail-steps">${stepsHtml}</ol>
    </div>
    <div class="dish-modal__section">
      <h4>فيديو التحضير</h4>
      <a class="dish-video-link" href="${videoUrl}" target="_blank" rel="noopener">
        مشاهدة فيديو الوصفة
      </a>
      <iframe
        class="dish-video"
        src="${embedUrl}"
        title="فيديو ${dish.name}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  `;

  attachImageFallbacks(dishModalBody);
  dishModal.classList.add("show");
  dishModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (dishModalClose) {
    dishModalClose.focus();
  }
};

const closeDishModal = () => {
  if (!dishModal || !dishModalBody) return;
  dishModal.classList.remove("show");
  dishModal.setAttribute("aria-hidden", "true");
  dishModalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
  activeDishId = null;
};

const getAvailableIngredients = () =>
  new Set(
    fridgeItems
      .filter((item) => item.inFridge && item.quantity > 0)
      .map((item) => item.name)
  );

const normalizeText = (value) => value.toLowerCase();

const getFilteredProducts = () => {
  const query = searchQuery.trim();
  if (!query) return products;
  const normalized = normalizeText(query);
  return products.filter((product) => {
    const haystack = `${product.name} ${product.store} ${product.unit}`;
    return normalizeText(haystack).includes(normalized);
  });
};

const renderProductStats = (startIndex, endIndex, total) => {
  if (!productStats) return;
  if (total === 0) {
    productStats.textContent = "لا توجد نتائج";
    return;
  }
  productStats.textContent = `عرض ${startIndex} - ${endIndex} من ${total} | ${ITEMS_PER_PAGE} عنصر/صفحة`;
};

const renderPagination = (totalPages) => {
  if (!productPagination) return;
  if (totalPages <= 1) {
    productPagination.innerHTML = "";
    productPagination.style.display = "none";
    return;
  }
  productPagination.style.display = "flex";
  const buttons = [];
  buttons.push(
    `<button class="page-btn" data-action="prev" ${
      currentPage === 1 ? "disabled" : ""
    }>السابق</button>`
  );
  for (let page = 1; page <= totalPages; page += 1) {
    const activeClass = page === currentPage ? "active" : "";
    buttons.push(
      `<button class="page-btn ${activeClass}" data-page="${page}">${page}</button>`
    );
  }
  buttons.push(
    `<button class="page-btn" data-action="next" ${
      currentPage === totalPages ? "disabled" : ""
    }>التالي</button>`
  );
  productPagination.innerHTML = buttons.join("");
};

const getFilteredFridgeItems = () => {
  const query = fridgeSearchQuery.trim();
  if (!query) return fridgeItems;
  const normalized = normalizeText(query);
  return fridgeItems.filter((item) => {
    const haystack = `${item.name} ${item.unit}`;
    return normalizeText(haystack).includes(normalized);
  });
};

const renderFridgeStats = (startIndex, endIndex, total) => {
  if (!fridgeStats) return;
  if (total === 0) {
    fridgeStats.textContent = "لا توجد نتائج";
    return;
  }
  fridgeStats.textContent = `عرض ${startIndex} - ${endIndex} من ${total} | ${FRIDGE_ITEMS_PER_PAGE} عنصر/صفحة`;
};

const renderFridgePagination = (totalPages) => {
  if (!fridgePagination) return;
  if (totalPages <= 1) {
    fridgePagination.innerHTML = "";
    fridgePagination.style.display = "none";
    return;
  }
  fridgePagination.style.display = "flex";
  const buttons = [];
  buttons.push(
    `<button class="page-btn" data-action="prev" ${
      fridgeCurrentPage === 1 ? "disabled" : ""
    }>السابق</button>`
  );
  for (let page = 1; page <= totalPages; page += 1) {
    const activeClass = page === fridgeCurrentPage ? "active" : "";
    buttons.push(
      `<button class="page-btn ${activeClass}" data-page="${page}">${page}</button>`
    );
  }
  buttons.push(
    `<button class="page-btn" data-action="next" ${
      fridgeCurrentPage === totalPages ? "disabled" : ""
    }>التالي</button>`
  );
  fridgePagination.innerHTML = buttons.join("");
};

const updateCounters = () => {
  cartCount.textContent = cart.size;
  const available = getAvailableIngredients();
  fridgeCount.textContent = available.size;
  const readyCount =
    available.size === 0
      ? 0
      : dishes.filter((dish) => {
          const missing = dish.ingredients
            .map((ingredient) => ingredient.name)
            .filter((ingredient) => !available.has(ingredient));
          return missing.length === 0;
        }).length;
  readyDishCount.textContent = readyCount;
};

const renderProducts = () => {
  const filtered = getFilteredProducts();
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  const startIndex = total === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems =
    total === 0
      ? []
      : filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (total === 0) {
    productGrid.innerHTML = `<div class="product-empty">لا توجد نتائج مطابقة للبحث.</div>`;
    renderProductStats(0, 0, 0);
    renderPagination(0);
    return;
  }

  const html = pageItems
    .map((product, index) => {
      const quantity = cart.get(product.id) || 0;
      const delay = `${Math.min(index, 20) * 0.05}s`;
      const fallback = svgData(product.name, product.color, product.accent);
      return `
        <div class="product-card" data-id="${product.id}" style="--delay:${delay}">
          <img
            src="${fallback}"
            data-remote="${product.image}"
            data-fallback="${fallback}"
            alt="${product.name}"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
          <h3>${product.name}</h3>
          <div class="meta">
            <span class="price">${formatPrice(product.price)} / ${
        product.unit
      }</span>
            <span>${product.store}</span>
          </div>
          <div class="qty-control">
            <button class="qty-btn" data-action="dec">-</button>
            <input class="qty-input" type="number" min="0" value="${quantity}" />
            <button class="qty-btn" data-action="inc">+</button>
          </div>
          <span class="pill">الكمية المطلوبة</span>
        </div>
      `;
    })
    .join("");
  productGrid.innerHTML = html;
  attachImageFallbacks(productGrid);
  renderProductStats(
    startIndex + 1,
    Math.min(startIndex + ITEMS_PER_PAGE, total),
    total
  );
  renderPagination(totalPages);
};

const renderFridge = () => {
  const filtered = getFilteredFridgeItems();
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / FRIDGE_ITEMS_PER_PAGE));
  if (fridgeCurrentPage > totalPages) {
    fridgeCurrentPage = totalPages;
  }
  const startIndex = total === 0 ? 0 : (fridgeCurrentPage - 1) * FRIDGE_ITEMS_PER_PAGE;
  const pageItems =
    total === 0
      ? []
      : filtered.slice(startIndex, startIndex + FRIDGE_ITEMS_PER_PAGE);

  if (total === 0) {
    fridgeList.innerHTML = `<div class="product-empty">لا توجد نتائج مطابقة للبحث.</div>`;
    renderFridgeStats(0, 0, 0);
    renderFridgePagination(0);
    return;
  }

  const html = pageItems
    .map((item) => {
      const statusClass = item.inFridge ? "" : "missing";
      return `
        <div class="fridge-item" data-id="${item.id}">
          <div class="fridge-top">
            <div>
              <div class="fridge-name">${item.name}</div>
              <div class="fridge-status ${statusClass}">
                ${item.inFridge ? "متوفر" : "غير متوفر"}
              </div>
            </div>
            <label class="switch">
              <input type="checkbox" class="fridge-toggle" ${
                item.inFridge ? "checked" : ""
              } />
              <span class="slider"></span>
            </label>
          </div>
          <div class="fridge-qty">
            <span>الكمية المتوفرة</span>
            <input class="fridge-qty-input" type="number" min="0" value="${
              item.quantity
            }" />
            <span>${item.unit}</span>
          </div>
        </div>
      `;
    })
    .join("");
  fridgeList.innerHTML = html;
  renderFridgeStats(
    startIndex + 1,
    Math.min(startIndex + FRIDGE_ITEMS_PER_PAGE, total),
    total
  );
  renderFridgePagination(totalPages);
};

const renderFridgeIngredients = () => {
  if (!fridgeIngredients) return;
  const availableItems = fridgeItems.filter(
    (item) => item.inFridge && item.quantity > 0
  );
  if (availableItems.length === 0) {
    fridgeIngredients.innerHTML =
      `<div class="ingredient-empty">لا توجد مكونات متوفرة حالياً.</div>`;
    return;
  }
  const html = availableItems
    .map(
      (item) =>
        `<div class="ingredient-item">
          <span>${item.name}</span>
          <span class="ingredient-qty">${item.quantity} ${item.unit}</span>
        </div>`
    )
    .join("");
  fridgeIngredients.innerHTML = html;
};

const renderDishes = () => {
  const available = getAvailableIngredients();
  const hasSelection = available.size > 0;

  const html = dishes
    .map((dish) => {
      const ingredientNames = dish.ingredients.map(
        (ingredient) => ingredient.name
      );
      const missing = ingredientNames.filter(
        (ingredient) => !available.has(ingredient)
      );
      const isReady = hasSelection && missing.length === 0;
      const statusText = hasSelection
        ? isReady
          ? "جاهز الآن"
          : "ينقصك بعض المكونات"
        : "تحقّق من المخزون";
      const message = hasSelection
        ? isReady
          ? "متاح بالكامل من مخزون الثلاجة."
          : `ينقصك: ${missing.join("، ")}. لا يمكنك اكمال هذا الطبق.`
        : "فعّل عناصر من الثلاجة ليتم التأكد من توفر المكونات.";
      const fallback = svgData(dish.name, dish.color, dish.accent);
      const tags = [
        `<span class="tag meal">${dish.meal}</span>`,
        ...dish.styles.map((style) => `<span class="tag style">${style}</span>`),
      ].join("");
      const previewIngredients = dish.ingredients.slice(0, 4);
      const extraCount = dish.ingredients.length - previewIngredients.length;
      const ingredientsText = previewIngredients
        .map((ingredient) => `${ingredient.name} (${ingredient.qty})`)
        .join("، ");
      const ingredientsSuffix =
        extraCount > 0 ? ` +${extraCount} مكونات أخرى` : "";
      return `
        <button type="button" class="dish-card ${
          isReady ? "available" : "missing"
        }" data-id="${dish.id}">
          <div class="dish-media">
            <img
              src="${fallback}"
              data-remote="${dish.image}"
              data-fallback="${fallback}"
              alt="${dish.name}"
              loading="lazy"
              referrerpolicy="no-referrer"
            />
            <div class="dish-tags">${tags}</div>
          </div>
          <div class="dish-body">
            <div class="dish-header">
              <h4>${dish.name}</h4>
              <span class="dish-status ${
                isReady ? "ready" : "not-ready"
              }">${statusText}</span>
            </div>
            <p>${message}</p>
            <div class="dish-ingredients">
              المكونات: ${ingredientsText}${ingredientsSuffix}
            </div>
            <span class="dish-link">عرض التفاصيل</span>
          </div>
        </button>
      `;
    })
    .join("");
  dishResults.innerHTML = html;
  attachImageFallbacks(dishResults);
};

const renderCart = () => {
  if (cart.size === 0) {
    cartItems.innerHTML = `<div class="dish-card missing">
      <h4>السلة فارغة</h4>
      <p>اختاري مواد من الأعلى لتظهر هنا.</p>
    </div>`;
    return;
  }

  const html = Array.from(cart.entries())
    .map(([id, quantity]) => {
      const product = productById.get(id);
      const fallback = svgData(product.name, product.color, product.accent);
      return `
        <div class="cart-row" data-id="${id}">
          <img
            src="${fallback}"
            data-remote="${product.image}"
            data-fallback="${fallback}"
            alt="${product.name}"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
          <div class="cart-info">
            <h4>${product.name}</h4>
            <span>${product.store}</span>
          </div>
          <div class="cart-actions">
            <div class="cart-qty">
              <button class="qty-btn" data-action="dec">-</button>
              <span>${quantity}</span>
              <button class="qty-btn" data-action="inc">+</button>
            </div>
            <div class="cart-price">${formatPrice(
              product.price * quantity
            )}</div>
            <button class="remove-btn" data-action="remove">إزالة</button>
          </div>
        </div>
      `;
    })
    .join("");
  cartItems.innerHTML = html;
  attachImageFallbacks(cartItems);
};

const renderInvoiceSummary = () => {
  if (cart.size === 0) {
    invoiceSummary.innerHTML = `<strong>الإجمالي: ${formatPrice(
      0
    )}</strong><span>لا توجد مواد حالياً.</span>`;
    return;
  }

  let total = 0;
  const storeStats = {};
  cart.forEach((quantity, id) => {
    const product = productById.get(id);
    total += product.price * quantity;
    storeStats[product.store] = (storeStats[product.store] || 0) + 1;
  });

  const storeList = Object.entries(storeStats)
    .map(([store, count]) => `${store} (${count})`)
    .join("، ");

  invoiceSummary.innerHTML = `
    <div><strong>الإجمالي: ${formatPrice(total)}</strong></div>
    <div>عدد المواد: ${cart.size}</div>
    <div>المحلات: ${storeList}</div>
  `;
};

const setCartQuantity = (id, quantity) => {
  const normalized = Math.max(0, Number(quantity) || 0);
  if (normalized === 0) {
    cart.delete(id);
  } else {
    cart.set(id, normalized);
  }
  renderProducts();
  renderCart();
  renderInvoiceSummary();
  updateCounters();
};

const adjustCart = (id, delta) => {
  const current = cart.get(id) || 0;
  setCartQuantity(id, current + delta);
};

const loadImage = (src, fallback) =>
  new Promise((resolve) => {
    if (!src) {
      if (!fallback) {
        resolve(null);
        return;
      }
      const fallbackImage = new Image();
      fallbackImage.onload = () => resolve(fallbackImage);
      fallbackImage.src = fallback;
      return;
    }
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => {
      if (!fallback || fallback === src) {
        resolve(null);
        return;
      }
      const fallbackImage = new Image();
      fallbackImage.onload = () => resolve(fallbackImage);
      fallbackImage.src = fallback;
    };
    image.src = src;
  });

const exportInvoiceImage = async () => {
  if (cart.size === 0) {
    showToast("السلة فارغة، أضيفي مواد أولاً.");
    return;
  }

  await document.fonts.ready;

  const items = Array.from(cart.entries()).map(([id, quantity]) => {
    const product = productById.get(id);
    return {
      ...product,
      quantity,
      fallback: svgData(product.name, product.color, product.accent),
    };
  });

  const rowHeight = 96;
  const headerHeight = 170;
  const footerHeight = 110;
  const width = 980;
  const height = headerHeight + items.length * rowHeight + footerHeight;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.direction = "rtl";

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#f8f4ee");
  gradient.addColorStop(1, "#f0e6da");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#1f4e50";
  ctx.font = 'bold 40px "Changa", sans-serif';
  ctx.textAlign = "right";
  ctx.fillText("فاتورة مشتريات المطبخ", width - 40, 70);

  ctx.font = '18px "Tajawal", sans-serif';
  const dateText = new Date().toLocaleDateString("ar-IQ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  ctx.fillText(dateText, width - 40, 108);

  ctx.strokeStyle = "rgba(31, 78, 80, 0.2)";
  ctx.beginPath();
  ctx.moveTo(40, headerHeight - 20);
  ctx.lineTo(width - 40, headerHeight - 20);
  ctx.stroke();

  ctx.font = '600 20px "Tajawal", sans-serif';
  ctx.fillText("الصنف", width - 160, headerHeight - 40);
  ctx.fillText("المحل", width - 520, headerHeight - 40);
  ctx.fillText("الكمية", width - 280, headerHeight - 40);
  ctx.fillText("السعر", width - 380, headerHeight - 40);

  const images = await Promise.all(
    items.map((item) => loadImage(item.image, item.fallback))
  );

  let y = headerHeight + 20;
  let total = 0;

  items.forEach((item, index) => {
    const image = images[index];
    ctx.fillStyle = "rgba(255, 255, 255, 0.86)";
    ctx.fillRect(40, y - 30, width - 80, rowHeight - 12);

    if (image) {
      ctx.drawImage(image, width - 130, y - 14, 70, 70);
    } else {
      ctx.fillStyle = "#e4ddd2";
      ctx.fillRect(width - 130, y - 14, 70, 70);
    }
    ctx.fillStyle = "#1b2c2d";
    ctx.font = '600 20px "Tajawal", sans-serif';
    ctx.fillText(item.name, width - 160, y + 8);

    ctx.fillStyle = "#425556";
    ctx.font = '16px "Tajawal", sans-serif';
    ctx.fillText(item.store, width - 520, y + 8);
    ctx.fillText(`${item.quantity} ${item.unit}`, width - 280, y + 8);
    const lineTotal = item.price * item.quantity;
    total += lineTotal;
    ctx.fillText(formatPrice(lineTotal), width - 380, y + 8);

    y += rowHeight;
  });

  ctx.fillStyle = "#1f4e50";
  ctx.font = '700 24px "Changa", sans-serif';
  ctx.fillText(`الإجمالي: ${formatPrice(total)}`, width - 40, height - 50);

  const dataUrl = canvas.toDataURL("image/png");
  invoicePreview.src = dataUrl;
  invoicePreview.classList.add("show");
  downloadInvoice.href = dataUrl;
  downloadInvoice.classList.remove("hidden");
  showToast("تم تجهيز الفاتورة كصورة، يمكنك حفظها وارسالها للواتساب.");
};

const handleLogin = (event) => {
  event.preventDefault();
  if (!userNameInput || !userPhoneInput) return;
  const name = userNameInput.value.trim();
  const phone = normalizePhone(userPhoneInput.value);

  if (!name || !phone) {
    showToast("يرجى ادخال الاسم ورقم الهاتف.");
    return;
  }

  const users = getUsers();
  const now = new Date().toISOString();
  let user = users.find((entry) => entry.phone === phone);
  if (user) {
    user.name = name;
    user.lastLogin = now;
  } else {
    user = {
      id: createUserId(),
      name,
      phone,
      createdAt: now,
      lastLogin: now,
      isAdmin: phone === ADMIN_PHONE,
    };
    users.push(user);
  }

  if (phone === ADMIN_PHONE) {
    user.isAdmin = true;
  }

  saveUsers(users);
  setCurrentUser(user);
  loadFridgeForUser(user);
  renderFridge();
  renderFridgeIngredients();
  renderDishes();
  updateCounters();
  renderAuth();
  renderAdminDashboard();
  persistFridge();
  showToast("تم تسجيل الدخول وحفظ بياناتك.");
};

const handleLogout = () => {
  setCurrentUser(null);
  const stored = getStoredJson(storageKeys.fridge, null);
  if (stored?.length) {
    applyFridgeState(stored);
  } else {
    resetFridgeToDefault();
  }
  renderFridge();
  renderFridgeIngredients();
  renderDishes();
  updateCounters();
  renderAuth();
  renderAdminDashboard();
  showToast("تم تسجيل الخروج.");
};

const initialize = () => {
  todayDate.textContent = new Date().toLocaleDateString("ar-IQ", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  totalVisits = trackVisit();
  const storedUser = loadCurrentUser();
  if (storedUser) {
    loadFridgeForUser(storedUser);
  } else {
    const stored = getStoredJson(storageKeys.fridge, null);
    if (stored?.length) {
      applyFridgeState(stored);
    } else {
      resetFridgeToDefault();
    }
  }

  renderProducts();
  renderFridge();
  renderFridgeIngredients();
  renderDishes();
  renderCart();
  renderInvoiceSummary();
  updateCounters();
  persistDishes();
  persistFridge();
  renderAuth();
  renderAdminDashboard();
  resolveImages();
};

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

if (logoutButton) {
  logoutButton.addEventListener("click", handleLogout);
}

if (headerLogout) {
  headerLogout.addEventListener("click", handleLogout);
}

productGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (!card) return;
  const id = card.dataset.id;
  if (event.target.dataset.action === "inc") {
    adjustCart(id, 1);
  }
  if (event.target.dataset.action === "dec") {
    adjustCart(id, -1);
  }
});

productGrid.addEventListener("change", (event) => {
  if (!event.target.classList.contains("qty-input")) return;
  const card = event.target.closest(".product-card");
  if (!card) return;
  const id = card.dataset.id;
  setCartQuantity(id, event.target.value);
});

if (productSearch) {
  productSearch.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    currentPage = 1;
    renderProducts();
  });
}

if (productPagination) {
  productPagination.addEventListener("click", (event) => {
    const button = event.target.closest(".page-btn");
    if (!button || button.disabled) return;
    if (button.dataset.page) {
      currentPage = Number(button.dataset.page);
    }
    if (button.dataset.action === "prev") {
      currentPage = Math.max(1, currentPage - 1);
    }
    if (button.dataset.action === "next") {
      const filteredTotal = getFilteredProducts().length;
      const totalPages = Math.max(
        1,
        Math.ceil(filteredTotal / ITEMS_PER_PAGE)
      );
      currentPage = Math.min(totalPages, currentPage + 1);
    }
    renderProducts();
  });
}

if (fridgeSearch) {
  fridgeSearch.addEventListener("input", (event) => {
    fridgeSearchQuery = event.target.value;
    fridgeCurrentPage = 1;
    renderFridge();
  });
}

if (fridgePagination) {
  fridgePagination.addEventListener("click", (event) => {
    const button = event.target.closest(".page-btn");
    if (!button || button.disabled) return;
    if (button.dataset.page) {
      fridgeCurrentPage = Number(button.dataset.page);
    }
    if (button.dataset.action === "prev") {
      fridgeCurrentPage = Math.max(1, fridgeCurrentPage - 1);
    }
    if (button.dataset.action === "next") {
      const filteredTotal = getFilteredFridgeItems().length;
      const totalPages = Math.max(
        1,
        Math.ceil(filteredTotal / FRIDGE_ITEMS_PER_PAGE)
      );
      fridgeCurrentPage = Math.min(totalPages, fridgeCurrentPage + 1);
    }
    renderFridge();
  });
}

if (dishResults) {
  dishResults.addEventListener("click", (event) => {
    const card = event.target.closest(".dish-card");
    if (!card || !card.dataset.id) return;
    openDishModal(card.dataset.id);
  });
}

if (dishModalClose) {
  dishModalClose.addEventListener("click", closeDishModal);
}

if (dishModal) {
  dishModal.addEventListener("click", (event) => {
    if (event.target === dishModal) {
      closeDishModal();
    }
  });
}

if (dishModalBody) {
  dishModalBody.addEventListener("click", (event) => {
    const button = event.target.closest(".add-missing");
    if (!button) return;
    const id = button.dataset.product;
    const product = productById.get(id);
    if (!product) {
      showToast("العنصر غير متوفر في قائمة الشراء.");
      return;
    }
    adjustCart(id, 1);
    showToast(`تمت اضافة ${product.name} الى السلة.`);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dishModal?.classList.contains("show")) {
    closeDishModal();
  }
});

fridgeList.addEventListener("change", (event) => {
  const itemCard = event.target.closest(".fridge-item");
  if (!itemCard) return;
  const item = fridgeItems.find((entry) => entry.id === itemCard.dataset.id);
  if (!item) return;
  let updated = false;

  if (event.target.classList.contains("fridge-toggle")) {
    item.inFridge = event.target.checked;
    renderFridge();
    renderFridgeIngredients();
    renderDishes();
    updateCounters();
    updated = true;
  }

  if (event.target.classList.contains("fridge-qty-input")) {
    item.quantity = Number(event.target.value) || 0;
    item.inFridge = item.quantity > 0;
    renderFridge();
    renderFridgeIngredients();
    renderDishes();
    updateCounters();
    updated = true;
  }

  if (updated) {
    persistFridge();
  }
});

document.getElementById("addMissingToCart").addEventListener("click", () => {
  let added = 0;
  fridgeItems.forEach((item) => {
    if (!item.inFridge && productById.has(item.id)) {
      cart.set(item.id, Math.max(1, cart.get(item.id) || 1));
      added += 1;
    }
  });
  if (added === 0) {
    showToast("كل العناصر متوفرة، لا يوجد نقص.");
    return;
  }
  renderProducts();
  renderCart();
  renderInvoiceSummary();
  updateCounters();
  showToast("تمت إضافة المواد الناقصة إلى السلة.");
});

cartItems.addEventListener("click", (event) => {
  const row = event.target.closest(".cart-row");
  if (!row) return;
  const id = row.dataset.id;
  if (event.target.dataset.action === "inc") {
    adjustCart(id, 1);
  }
  if (event.target.dataset.action === "dec") {
    adjustCart(id, -1);
  }
  if (event.target.dataset.action === "remove") {
    setCartQuantity(id, 0);
  }
});

document.getElementById("exportInvoice").addEventListener("click", exportInvoiceImage);

initialize();
