# Лаб 7 — Sass/SCSS CSS preprocessor

Лаб 6-ийн сайт дээр тулгуурласан. `scss/_original.scss` нь өмнөх CSS-ийг хадгалж, SCSS-ийн шинэ бүтэц нь token, mixin, function, component, utility-ийг салгасан. `style.css` нь эх хувилбар тул Sass суулгаагүй үед ч сайт ажиллана.

## Ажиллуулах
1. VS Code-оор энэ хавтсыг нээнэ.
2. Terminal дээр `npm install` ажиллуулна.
3. `npm run build` — SCSS-ийг `style.css` болгож хөрвүүлнэ.
4. `npm run build:compressed` — `style.min.css` compressed хувилбар үүсгэнэ.
5. `index.html`-ийг Live Server-ээр нээнэ.

## Файлууд
- `_tokens.scss`: өнгө, радиус, breakpoint, `:root` custom properties
- `_mixins.scss`: `respond`, `flex-center`
- `_functions.scss`: `rem()`, `contrast()`
- `_components.scss`: nested rules, BEM, mixin/function ашиглалт
- `_utilities.scss`: `@each` utility classes
- `_original.scss`: Лаб 6-ийн хэв маягийг алдагдуулахгүй хадгалсан CSS
- `style.scss`: үндсэн entry point

## Хамгаалах үед
- Sass нь SCSS кодыг browser ойлгох CSS болгон хөрвүүлдэг.
- Token нь өнгө, хэмжээг нэг газраас удирдана.
- Mixin нь давтагдсан CSS-ийг дахин ашиглана.
- Function нь хэмжээг rem болгох, өнгөнд тохирох текст сонгоно.
- Partial нь `_`-ээр эхэлдэг SCSS модуль.
- BEM: `gallery-card__image`, `gallery-card--active`.
- `@each` нь давталтаар utility class үүсгэнэ.
- Compressed build нь CSS-ийн хоосон зайг багасгана.

**Шалгах:** Лаб 6 ба Лаб 7-г браузер дээр зэрэг нээж харьцуул. Dark Mode, карт эргүүлэх, mobile responsive ажиллаж байгаа эсэхийг турш.
