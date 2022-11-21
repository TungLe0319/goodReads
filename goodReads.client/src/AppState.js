import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Book.js').Book[]} */
  books: [],

  /** @type {import('./models/Book.js').Book | null} */
  activeBook: null,

  /** @type {import('./models/Book.js').Book | null} */
  extraDetails: null,
  
  
  /** @type {import('./models/Review.js').Review[]} */
  reviews: [],
  
  /** @type {import('./models/Follow.js').Follow[]} */
  follows:[],
  /** @type {import('./models/BookShelf.js').BookShelf[]} */
  bookshelves:[],
  
  theme: false,
});
