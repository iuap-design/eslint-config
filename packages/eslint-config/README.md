# eslint-config

用友大前端团队代码规范。

基于 [eslint-config-standard](https://github.com/standard/eslint-config-standard) 和 [eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react)。

规则参见其官方文档 [https://standardjs.com/rules-zhcn.html](https://standardjs.com/rules-zhcn.html)。

## 使用说明

安装如下的依赖包：

```bash
npm install --save-dev @iuap/eslint-config eslint babel-eslint eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

然后在 `.eslintrc` 文件中按如下方式配置：

```json
{
  "parser": "babel-eslint",
  "extends": ["@iuap"]
}
```
