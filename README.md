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

## Vec2 - 基本的なオーバーロードの使い方

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

それぞれ
```js
//x, yを受け取り{x, y}を返すパターン
Vec2(10, 20)
//=>{x: 10, y: 20}

//xyを受け取り{x: xy, y: xy}を返すパターン
Vec2(32)
//=>{x: 32, y: 32}

//何も受け取らずに{x: 0, y: 0}を返すパターン
Vec2()
//=>{x: 0, y: 0}
```

このように使えます。

1つめの`x, y`を受け取り`{x, y}`を返すパターンの実装は

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
で引数を定義します。この場合だと*Number型のx*と*Number型のy*を定義しています。

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

## Human - 名前付き引数の使い方
人の情報を返す`Human`関数があるとします。

`Human`関数は名字と名前と生まれた月と日を受け取ります。

実装は以下のとおりです。

```js
const Human = hyper([
  {
    FirstName: String,
    LastName: String,
    BirthdayMonth: Number,
    BirthdayDay: Number,
    _({ FirstName, LastName, BirthdayMonth, BirthdayDay }) {
      return {
        FirstName,
        LastName,
        BirthdayMonth,
        BirthdayDay
      }
    }
  }
])
```

使用例：
```js
Human('Taro', 'Yamada', 4, 6)
```

この例だけ見ると名前が`Yamada Taro`ということは分かるのですが、次の`4, 6`が`4月6日`なのか`6月4日`なのかはっきりしません。

そんなときに*名前付き引数(NamedParameter)*が役立ちます。

NamedParameterを使うにはhyper-functionを`import`する部分を以下のようにします。

```js
import hyper, { NamedParameter as Np } from 'hyper-function'
```

先程の例を名前付き引数で呼び出してみます。

```js
Human(Np.Firstname = 'Taro', Np.Lastname = 'Yamada', Np.BirthdayMonth = 4, Np.BirthdayDay = 6)
//=> {FirstName: "Taro", LastName: "Yamada", BirthdayMonth: 4, BirthdayDay: 6}
```
このように

```js
Np.引数名 = 値
```
で引数を渡しています。

といっても最初の`Taro`と`Yamada`はどんな意味なのかは分かるので生まれた月と日だけ名前付き引数で渡すと

```js
Human('Taro', 'Yamada', Np.BirthdayMonth = 4, Np.BirthdayDay = 6)
//=> {FirstName: "Taro", LastName: "Yamada", BirthdayMonth: 4, BirthdayDay: 6}
```

こんなかんじです。
だいぶ見やすいと思いませんか？

ちなみに名前付き引数は順番を変えても正常に動作します。

```js
// BirthdayMonthとBirthdayDayの一を入れ替えた
Human('Taro', 'Yamada', Np.BirthdayDay = 6, Np.BirthdayMonth = 4)
//=> {FirstName: "Taro", LastName: "Yamada", BirthdayMonth: 4, BirthdayDay: 6}
```

## デフォルト値
引数にはデフォルト値を付けれます。

通常引数を定義するときは
```js
引数名:型
```
ですが
引数のデフォルト値を付けるには
```js
引数名: {
  type: 型,
  default: () => デフォルト値
}
```
のように記述します。