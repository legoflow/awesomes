# 使用自定义 Postcss 配置

## 说明

Demo 主要介绍通过项目下的 `.postcssrc.js` 自定义配置项目的 Postcss 设置

## 原理

LegoFlow 一旦检查到项目目录下存在 `.postcssrc.*` 配置文件，会自动加载该文件作为 [postcss-loader](https://github.com/postcss/postcss-loader) 的配置项

而通过 `.postcssrc.js` 配置的插件，需要自行安装在项目的 node_modules

## 使用

#### ↓ 安装依赖

```shell
npm i
```

#### ↓ 启动开发工作流

```shell
lf dev
```

#### ↓ 启动构建工作流

```shell
lf build
```
