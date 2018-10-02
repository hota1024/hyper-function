# hyper-functionについて
hyper-functionはJavaScriptで（擬似的に？）名前付き引数とオーバーロード可能な関数を利用するためのライブラリです。

# インストール
```bash
# NPM
npm install hyper-function
# yarn
yarn add hyper-function
```

# 使い方
## import
hyper-functionはES6の`import`で読み込むことができます。

```js
import hyper from 'hyper-function'
```

hyper-functionだと名前が長いので`hyper`としてインポートしています。

## 関数の定義
関数を定義するには

```js
const func = hyper([
  {
    引数1: 型,
    引数2: 型,
    引数3: 型,
    引数...: 型,
    _({ 引数1, 引数2, 引数3, 引数... }) { /*処理*/ },
  },
  {
    引数1: 型,
    引数2: 型,
    引数3: 型,
    引数4: 型,
    引数...: 型,
    _({ 引数1, 引数2, 引数3, 引数4, 引数... }) { /*処理*/ },
  },
])
```

このように記述します。

型についてはJavaScriptのプリミティブ型のみ対応しています。

> 自作型（クラス）とAny型（なんでも対応できる型）を開発しています。
