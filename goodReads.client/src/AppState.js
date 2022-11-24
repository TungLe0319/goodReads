import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  users: [],
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Account[]} */
  profiles: [],

  /** @type {import('./models/Book.js').Book[]} */
  books: [],
  /** @type {import('./models/Book.js').Book[]} */
  sPBooks: [],

  /** @type {import('./models/SQLBook.js').SQLBook | null} */
  activeBook: null,

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
  /** @type {import('./models/Review.js').Review[]} */
  accountReviews: [],

  theme: false,
totalItems: 0,
startIndex:0,
  categories:[
    'Performing Arts',
    'Psychology',
    'Religion',
    'Biomechanics',
    'Nature',
    'Social Science',
    'History',
    'Cooking',
    'Astronomy',
    'Fiction',
    'Body, Mind & Spirit',
    'Sports',
    'Health & Fitness',
    'Business & Economics',
    'Self-Help',
    'Science',
    'Medical',
    'Family & Relationships',
    'Juvenile Fiction',
    'Political Science',
    'Law',
    'Humor',
    'Sports & Recreation',
    'Bereavement',
    'Poetry',
    'Art',
    'Education',
    'Biography & Autobiography',
    'Young Adult Fiction'

]
});
