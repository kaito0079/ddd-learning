# DDD Learning

ドメイン駆動設計（DDD）を学ぶためのリポジトリです。

## 環境

- Express + TypeScript
- Docker環境での開発

## 必要アプリケーション

- Docker
- Docker Compose
- Task (タスクランナー)
  - [go-task](https://github.com/go-task/task)

## セットアップ

1. リポジトリのクローン
```bash
git clone [repository-url]
cd ddd-learning
```

2. 開発環境のセットアップ
```bash
task setup
```

## 開発環境の立ち上げ

1. コンテナの起動
```bash
task up
```

2. 開発サーバーの起動
```bash
task dev
```

3. コンテナの停止
```bash
task down
```

## コマンド一覧

- `task setup`: 開発環境のセットアップ
- `task npm-install`: 依存関係のインストール
- `task copy-node-modules`: node_modulesをローカルにコピー
- `task up`: コンテナをバックグラウンドで起動
- `task down`: コンテナを停止
- `task dev`: 開発サーバーを起動
- `task test`: テストの実行
- `task test:watch`: テストの監視実行

## アーキテクチャ

オニオンアーキテクチャを採用

### レイヤー構造

- ドメインレイヤー: ビジネスロジックの中核
- アプリケーションレイヤー: ユースケースの実装
- インフラストラクチャレイヤー: 外部サービスとの連携
- インターフェースレイヤー: APIエンドポイントの提供

### ディレクトリ構造

```
.
├── src/
│   ├── domain/           # ドメインレイヤー
│   │   ├── entities/     # エンティティ
│   │   ├── value-objects/# 値オブジェクト
│   │   ├── aggregates/   # 集約
│   │   └── repositories/ # リポジトリインターフェース
│   ├── application/      # アプリケーションレイヤー
│   │   ├── services/     # アプリケーションサービス
│   │   └── dto/          # データ転送オブジェクト
│   ├── infrastructure/   # インフラストラクチャレイヤー
│   │   ├── repositories/ # リポジトリ実装
│   │   └── database/     # データベース関連
│   ├── interfaces/       # インターフェースレイヤー
│   │   ├── controllers/  # コントローラー
│   │   ├── middlewares/  # ミドルウェア
│   │   └── routes/       # ルーティング
│   └── shared/           # 共有コード
│       ├── errors/       # エラー定義
│       └── utils/        # ユーティリティ
├── prisma/              # Prisma関連ファイル
├── dist/                # ビルド成果物
├── .eslintrc.json      # ESLint設定
├── .prettierrc         # Prettier設定
├── tsconfig.json       # TypeScript設定
├── Dockerfile          # Docker設定
├── docker-compose.yml  # Docker Compose設定
└── Taskfile.yml        # タスク設定
```

### 依存関係の方向
- 外側のレイヤーは内側のレイヤーに依存
- 内側のレイヤーは外側のレイヤーに依存しない
- 依存性逆転の原則を適用

## ブランチの運用方法

勉強会が開催された日ごとにブランチ（ex: ddd_20250508）を作成する
勉強会で作成されたコードはmainにマージしない

## ライセンス

MIT 
