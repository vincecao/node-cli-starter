# Vue 3 & TailwindCSS Template 

_(Fixed PureCSS)_

* TailwindCSS
* root import

``` bash
~ #src/
@components #src/components 
```

Could check on this [demo](https://vince-amazing.com/Vue-3-TailwindCSS-Template/) branch

## Project setup

``` bash
npm install

# serve
npm run start

# build
npm run build
```

## Fixed with PureCSS Error manually

[Error: PostCSS plugin TailwindCSS requires PostCSS 8](https://stackoverflow.com/questions/64925926/error-postcss-plugin-tailwindcss-requires-postcss-8)

``` bash
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
