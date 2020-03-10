# 1週間チャレンジ
## Home Bell

## インストール
- npm install --save next react react-dom

## 作成
- package.json
```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  }
}
```
## 起動
- npm run dev

## 必要フォルダファイル準備
- pages/index.js
- next.config.js
```js
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/'}
    }
  }
}
```

## build export
- npm run build
- npm run export

## staticフォルダファイル準備
- static/Style.js

## git pushする
- git init
- ほにゃららpush

## Layoutコンポーネント作成
- components/Layout.js
- components/Header.js
- components/Footer.js
- index.jsにimport

## head情報設定
- components/Layout.js編集

## reduxの導入
- npm install --save redux
- npm install --save react-redux
- npm install --save redux-thunk
- lib/redux-store.jsの作成
- pages/_app.jsの作成
- ストアの作成はちょっと後回し

## firebaseのサイトで色々やる
- 登録後
- アプリの追加
- スクリプトコピー

## firebaseのインストール
- npm install --save firebase

## storeの作成
- firebaseのkey等の為これはpushしてません

