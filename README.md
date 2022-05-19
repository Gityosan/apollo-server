# apollo-server

最小構成の typescript 環境に肉付けしていく
`yarn add apollo-server graphql`
`yarn add -D prisma`
`yarn prisma init`
.env に DB のパスを追記して、schema.prisma 作成
prisama migrate コマンドでマイグレーション(sql ファイル生成)する
`yarn prisma migrate dev --name init`
Docker 起動（PostgreSQL）
`docker compose up -d`

`yarn prisma studio`
下記コマンドで schema.prisma ファイルをフォーマット可能
`npx prisma format`
