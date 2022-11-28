import { reactive } from "vue";
import { loadState } from "./utils/Store.js";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  hovering :false,
  user: {},
  users: [],
  /** @type {import('./models/Account.js').Account} */
  account: {},
  // light: loadState('light') || false,
  /** @type {import('./models/Account.js').Account[]} */
  profiles: [],
  /** @type {import('./models/Account.js').Account | null} */
  activeProfile: null,

  /** @type {import('./models/Book.js').Book[]} */
  books: [],
  /** @type {import('./models/Book.js').Book[]} */
  sPBooks: [],
  /** @type {import('./models/Book.js').Book[]} */
  aPBooks: [],

  /** @type {import('./models/Book.js').Book[]} */
  favoriteBooks: [],
  favoriteBookImgs: [],

  /** @type {import('./models/SQLBook.js').SQLBook | null} */
  activeBook: null,


  activeBookShelf: null,

  /** @type {import('./models/Book.js').Book | null} */
  extraDetails: null,

  /** @type {import('./models/Review.js').Review[]} */
  reviews: [],

  /** @type {import('./models/Follow.js').Follow[]} */
  followers: [],
  /** @type {import('./models/Follow.js').Follow[]} */
  following: [],
  /** @type {import('./models/BookShelf.js').BookShelf[]} */
  accountBookshelves: [],
  accountReviews: [],
  
  /** @type {import('./models/ShelvedBook.js').ShelvedBook[]}*/
  accountShelvedBooks: [],

  /** @type {import('./models/Quote.js').Quote | null} */
  quote: null,

  authorList: [],
  categoryList: [],
  filePicker: {},
  categoryQuery: "",
  theme: loadState("theme"),
  totalItems: 0,
  startIndex: 0,
  categories: [
    { name: "Performing Arts", checked: false },
    { name: "Psychology", checked: false },
    { name: "Religion", checked: false },
    { name: "Biomechanics", checked: false },
    { name: "Nature", checked: false },
    { name: "Social Science", checked: false },
    { name: "History", checked: false },
    { name: "Cooking", checked: false },
    { name: "Astronomy", checked: false },
    { name: "Fiction", checked: false },
    { name: "Body, Mind & Spirit", checked: false },
    { name: "Sports", checked: false },
    { name: "Health & Fitness", checked: false },
    { name: "Business & Economics", checked: false },
    { name: "Self-Help", checked: false },
    { name: "Science", checked: false },
    { name: "Medical", checked: false },
    { name: "Family & Relationships", checked: false },
    { name: "Juvenile Fiction", checked: false },
    { name: "Political Science", checked: false },
    { name: "Law", checked: false },
    { name: "Humor", checked: false },
    { name: "Sports & Recreation", checked: false },
    { name: "Bereavement", checked: false },
    { name: "Poetry", checked: false },
    { name: "Art", checked: false },
    { name: "Education", checked: false },
    { name: "Biography & Autobiography", checked: false },
    { name: "Young Adult Fiction", checked: false },
  ],
});
