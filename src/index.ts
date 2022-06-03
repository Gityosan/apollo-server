import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {loadSchemaSync} from '@graphql-tools/load';
import {addResolversToSchema} from '@graphql-tools/schema';
import {ApolloServer} from 'apollo-server';
import {join} from 'path';
import {resolvers} from './resolvers';

// schema.graphqlの読み込み
const schema = loadSchemaSync(join(__dirname, './schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

// サーバーの起動
//const server = new ApolloServer({ typeDefs, resolvers });

const schemaWithResolvers = addResolversToSchema({schema, resolvers});
const server = new ApolloServer({schema: schemaWithResolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
