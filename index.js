import { en } from "./js/en.js";
import { es } from "./js/es.js";
import { fr } from "./js/fr.js";
import { refs } from "./js/refs.js";

const burgerIcon = document.querySelector(".burger_menu_icon");
const burgerMenu = document.querySelector(".burger_nav");
console.dir(burgerMenu);
burgerIcon.addEventListener("click", (e) => {
  burgerMenu.style.display = "block";
});
document.addEventListener("click", (e) => {
  if (!burgerMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
    burgerMenu.style.display = "none";
  }
});

const {
  btn: { btn_en, btn_es, btn_fr },
  navigation: { contact, brand, about },
  titles: { best_title, stats_title },
  text: { banner_text, landing_desc },
  page_btn: { partner_btn, details_btn, discover_btn },
  statistics_desc: { stat1, stat2, stat3, stat4, stat5, stat6 },
  counts: { restaurants_count, cities_count, brands_count, more_count },
  restaurant: {
    restaurant_title,
    restaurant_item1,
    restaurant_item2,
    restaurant_item3,
    restaurant_item4,
    restaurant_item5,
  },
  find: { find_title, find_item1, find_item2 },
  corporate: {
    corporate_title,
    corporate_item1,
    corporate_item2,
    corporate_item3,
    corporate_item4,
  },
  social: { social_title, social_item1, social_item2 },
  order: { order_title, order_item1, order_item2 },
} = refs;

function translatePage(lang) {
  contact.textContent = lang.contact;
  brand.textContent = lang.brand;
  about.textContent = lang.about;
  best_title.textContent = lang.best_title;
  stats_title.textContent = lang.stats_title;
  banner_text.textContent = lang.banner_text;
  landing_desc.textContent = lang.landing_desc;
  partner_btn.textContent = lang.partner_btn;
  details_btn.textContent = lang.details_btn;
  discover_btn.textContent = lang.discover_btn;
  stat1.textContent = lang.stat1;
  stat2.textContent = lang.stat2;
  stat3.textContent = lang.stat3;
  stat4.textContent = lang.stat4;
  stat5.textContent = lang.stat5;
  stat6.textContent = lang.stat6;
  restaurants_count.textContent = lang.restaurants_count;
  cities_count.textContent = lang.cities_count;
  brands_count.textContent = lang.brands_count;
  more_count.textContent = lang.more_count;
  restaurant_title.textContent = lang.restaurant_title;
  restaurant_item1.textContent = lang.restaurant_item1;
  restaurant_item2.textContent = lang.restaurant_item2;
  restaurant_item3.textContent = lang.restaurant_item3;
  restaurant_item4.textContent = lang.restaurant_item4;
  restaurant_item5.textContent = lang.restaurant_item5;
  find_title.textContent = lang.find_title;
  find_item1.textContent = lang.find_item1;
  find_item2.textContent = lang.find_item2;
  corporate_title.textContent = lang.corporate_title;
  corporate_item1.textContent = lang.corporate_item1;
  corporate_item2.textContent = lang.corporate_item2;
  corporate_item3.textContent = lang.corporate_item3;
  corporate_item4.textContent = lang.corporate_item4;
  social_title.textContent = lang.social_title;
  social_item1.textContent = lang.social_item1;
  social_item2.textContent = lang.social_item2;
  order_title.textContent = lang.order_title;
  order_item1.textContent = lang.order_item1;
  order_item2.textContent = lang.order_item2;
}

// btn_en.addEventListener("click", () => {
//   translatePage(en);
// });
// btn_es.addEventListener("click", () => {
//   translatePage(es);
// });
// btn_fr.addEventListener("click", () => {
//   translatePage(fr);
// });

// const button = { btn_en, btn_ua, btn_fr };
// const languages = { en, fr, ua };
// Object.keys(button).forEach((key) => {
//   button[key].addEventListener("click", (e) => {
//     const langCode = key.split("_")[1];
//     changeLanguage(languages[langCode]);
//     Object.keys(button).forEach((btnKey) => {
//       button[btnKey].classList.remove("active");
//     });
//     e.target.classList.add("active");
//   });
// });

const button = { btn_en, btn_es, btn_fr };
const languages = { en, es, fr };
Object.keys(button).forEach((key) => {
  button[key].addEventListener("click", (e) => {
    const langCode = key.split("_")[1];
    translatePage(languages[langCode]);
    Object.keys(button).forEach((btnKey) => {
      button[btnKey].classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
