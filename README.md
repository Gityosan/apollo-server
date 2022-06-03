# apollo-server

- 最小構成の typescript 環境に肉付けしていく
  - `yarn add apollo-server graphql`
  - `yarn add -D prisma`
  - `yarn prisma init`
- .env に DB のパスを追記
- schema.graphql 作成
- codegen.yml 設定
  - `yarn codegen`
- Query/Mutation 開発
- schema.prisma 作成
- prisama migrate コマンドでマイグレーション(sql ファイル生成)する

  - `yarn prisma migrate dev --name init`

- Docker 起動（PostgreSQL）
  - `docker compose up -d`
- Apollo Studio 起動
  - `yarn dev`
- Prisma Studio 起動

  - `yarn prisma studio`

- Docker 停止
  - `docker stop apollo-server_db_1`
- 下記コマンドで schema.prisma ファイルをフォーマット可能
  - `npx prisma format`
