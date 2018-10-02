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

> 現在自作型（クラス）とAny型（なんでも対応できる型）を開発しています。

# デモと解説

## Vec2

```js
const Vec2 = hyper([
	{
		x: Number,
		y: Number,
		_({ x, y }) {
			return { x, y }
		}
	},
	{
		xy: Number,
		_({ xy }, call) {
			return call(xy, xy)
		}
	},
	{
		_(call) {
			return call(0)
		}
	}
])
```

`Vec2`関数は3つのパターンがあります。

1. `x, y`を受け取り`{x, y}`を返すパターン
2. `xy`を受け取り`{x: xy, y: xy}`を返すパターン
3. 何も受け取らずに`{x: 0, y: 0}`を返すパターン

1つめの`x, y`を受け取り`{x, y}`を返すパターンの実装

```js
{
	x: Number,
	y: Number,
	_({ x, y }) {
		return { x, y }
  }
},
```

このようになっています。

最初の
```js
x: Number,
y: Number,
```
で引数を定義します。この場合だと*Number型のx*と*Number型のy*を定義しています。

次の
```js
_({ x, y }) {
	return { x, y }
}
```
これはこのパターンの処理部分です。
必ずパターンの処理関数の名前は`_`にしてください。

引数の`_({ x, y })`は先程の*Number型のx*と*Number型のy*に対応しています。

なお
```js
_({ x, y }) {
	return { x, y }
}
```
は
```js
_(data) {
	return { x: data.x, y: data.y }
}
と書き換えれます。
```

2つめの`xy`を受け取り`{x: xy, y: xy}`を返すパターンの実装は

```js
{
  xy: Number,
	_({ xy }, call) {
		return call(xy, xy)
	}
},
```
このようになっています。

引数は`Number型のxy`のみです。

処理部分は
```js
_({ xy }, call) {
	return call(xy, xy)
}
```
このようになっています。

先程のパターンとは違い、第二引数に`call`という引数があります。
そして`return call(xy, xy)`を返しています。

これは先程のパターン（`x, y`を受け取り`{x, y}`を返すパターン）のを呼び出しています。

何も受け取らずに{x: 0, y: 0}を返すパターンの実装は
```js
{
	_(call) {
		return call(0)
	}
}
```

引数が空の場合はいきなり第一引数で`call`を受け取れます。
ちなみにこの`call(0)`は先程の引数が`xy`だけのパターンを呼び出しています。
