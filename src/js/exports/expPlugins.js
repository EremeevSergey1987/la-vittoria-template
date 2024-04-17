// * Подключение автосмены темы
import colorSchemes from "site-color-schemes";

// * Подключение проверки поддержки avif и webp, добавление класса avif и/или webp для HTML
import isAvifWebp from "avif-webp-checker";

// * Подключение определения OS смартфона
import {mobileCheck} from "../plugins/mobileCheck.js";

// * Подключение простого меню с бургером
// import {menu} from "../plugins/menu.js";

export const $plugins = {
   colorSchemes,
   isAvifWebp,
   mobileCheck,
   // menu,
};
