import {ApolloServer} from 'apollo-server';
import {resolvers} from '../src/resolvers/index';
import {typeDefs} from '../src/schema/index';

// サーバーの起動
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
