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