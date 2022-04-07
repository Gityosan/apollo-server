import {gql} from 'apollo-server';
// GraphQLスキーマの定義
export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book!]!
  }
`;
