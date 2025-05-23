# アプリケーションレイヤー

アプリケーションレイヤーは、ユースケースの実装を担当するレイヤーです。このレイヤーには以下の要素が含まれます：

## ディレクトリ構造

- `services/`: アプリケーションサービス（ユースケースの実装）
- `dto/`: データ転送オブジェクト（レイヤー間のデータ転送用）

## 責任

- ユースケースの実装
- トランザクション管理
- ドメインレイヤーとインフラストラクチャレイヤーの調整
- 入力データの検証

## 依存関係

- ドメインレイヤーに依存
- インフラストラクチャレイヤーに依存（依存性逆転の原則を適用） 
