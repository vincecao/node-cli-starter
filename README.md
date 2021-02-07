# Vue 3 & TailwindCSS Template 

_(Fixed PureCSS)_

## Project setup

``` bash
yarn

# serve
yarn start

# build
yarn build
```

## Fixed with PureCSS Error manually

[Error: PostCSS plugin tailwindcss requires PostCSS 8](https://stackoverflow.com/questions/64925926/error-postcss-plugin-tailwindcss-requires-postcss-8)

``` bash
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
