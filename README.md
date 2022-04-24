# 概要
Libergraphyは「Liber(自由な) + graphy(…記)」で自由にいろんな内容を記載できるブログサイトです。
記事としていろんな内容を投稿したり、投稿内容をもとに議論したりすることが可能なサイトを作ります。

# ディレクトリ構成
* api: バックエンド
* web: フロンドエンド
* tests: テストコード

# バックエンド
## 環境構築
TODO: 今後にDBやpip等の管理方法が確定してから記載する

## 起動コマンド
apiのディレクトリに内で下記のコマンドで起動する
```
uvicorn main:app --reload
```

下記のリンクをにてSwaggerが表示されたら起動成功
http://localhost:8000/docs

## 参考になるサイト
* [PEP8](https://pep8-ja.readthedocs.io/ja/latest/)
* [FastApi](https://fastapi.tiangolo.com/ja/)

# フロントエンド
## 環境構築
webディレクトリの中で下記のコマンドを実施する
```
npm install
```

## 起動コマンド(開発環境用)
webディレクトリの中で下記のコマンドを実施する
```
npm run dev
```

## 参考になるサイト
* [vite](https://ja.vitejs.dev/guide/)
* [script setup](https://v3.ja.vuejs.org/api/sfc-script-setup.html#typescript-%E3%81%AE%E3%81%BF%E3%81%AE%E6%A9%9F%E8%83%BD)
* [Tailwind CSS](https://tailwindcss.jp/docs/installation)

# テストコード
## 環境構築
testsディレクトリにて下記のコマンドを実施する
```
npm install
```

## テスト実施
testsディレクトリで下記のコマンドで起動する
```
npx cypress open
```

![テスト1](https://user-images.githubusercontent.com/40077660/164956411-65b48716-3162-45cd-982b-709d3fb7b359.png)

※1例で上記の通り画面を出したが、実施したいテストのjsを押下する

## 参考になるサイト
* [cypress](https://www.cypress.io/)
