# Create React App Enhanced Template (typescript)

For Javascript version, please check [CRA-Enhanced-Template](https://github.com/vincecao/CRA-Enhanced-Template)

This template add following features:

* Latest `TailwindCSS-v2` with `PureCSS-8` & `autoprefixer-10`
* root import with `eslint` and `jest`
* `prettier`,       `husky` & `lint-staged` for formatting with commit hook

``` bash
components #src/components 
...
```

Could check on this [demo](https://vince-amazing.com/CRA-Enhanced-Template-typescript/) branch

## Project setup

``` bash
npm install

# serve
npm run start

# build
npm run build
```

# Upgrade dependencies

``` bash
yarn upgrade --latest
```

# TODO

Seems Like facing `aliased imports are not supported` issue  when add `paths` in `compilerOptions`

[create-react-app Typescript 3.5, Path Alias](https://stackoverflow.com/questions/57070052/create-react-app-typescript-3-5-path-alias)
