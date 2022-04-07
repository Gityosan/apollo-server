import {books} from '../data/index';
// リゾルバーの定義
export const resolvers = {
  Query: {
    books: () => books,
  },
};
