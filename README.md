# TypeScript-react-starter

开箱即用的 TypeScript React 项目级脚手架。

## 特性

- TypeScript
- 默认使用 CSS Module
- 默认使用 SASS 预处理器
- 代码格式化 Prettier
- 编辑器格式同步 editorconfig
- 集成了团队 Git 开发规范
- 默认配置了 alias （TypeScript alias & jest alias）
- React 组件测试模板代码
- GitLab-CI 配置模板

## 使用

1. 克隆项目：

```bash
git clone git@github.com:hifizz/typescript-react-starter.git ts-react-project
cd ts-react-project
rm -rf .git
```

2. 安装依赖：

```bash
yarn install
```

3. 开发

```bash
yarn start
```

## 命令

- `yarn start`
- `yarn build`
- `yarn test`

## Browser Test

```bash
# 打开 cypress 测试，会实时监控
yarn cypress:open
```

## Q&A

Q: 为什么没有配置 `npm run lint`？

A: 项目默认配置了 `tslint` `prettier` 并把 `prettier` 加到了 git precommit hook 里面。只要保证 `tslint.json` 和 `.prettierc` 一致，那么团队的代码规范就能够保证一致。

Q: 为什么要 `enject` ?

A: 为了对 webpack config 进行定制。在业务复杂的情况，我们通常需要对webpack配置进行修改，在没有 enject 的情况下，需要借助一些工具来对webpack配置进行重写。我认为这样做带来的麻烦更多。拿到真正的 config 进行修改，更有掌控力。当然，这也会带来不能跟着 cra 升级的问题，其次是升级构建工具时，需要自己修改很多配置。但这对于一个持续迭代的项目来说，可以接受。
