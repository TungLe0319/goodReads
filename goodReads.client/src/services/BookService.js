import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { Review } from "../models/Review.js";
import { SQLBook } from "../models/SQLBook.js";
import { router } from "../router.js";
import { filterDuplicates } from "../utils/FilterDuplicates.js";
import { api, googleBookApi } from "./AxiosService.js";

class BookService {
  async getBooks() {
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: "game",
        maxResults: 40,
      },
    });

    let books = res.data.items.map((b) => new Book(b));

    for (const b of books) {
      b.categories = b.categories.toString();
      b.authors = b.authors.toString();
      const book = await api.post("api/books", b);
      // console.log(book.data);
    }

    AppState.books = res.data.items.map((b) => new Book(b));
  }
  async searchByQuery(term) {
    AppState.categories.forEach((c) => (c.checked = false));

let res

// if (AppState.categoryQuery) {
//    res = await googleBookApi.get("/volumes", {
//      params: {
//        q: term,
//        maxResults: 24,
//      },
//    });
// }

     res = await googleBookApi.get("/volumes", {
       params: {
         q: term,
         maxResults: 24,
         printType: "books", // only include books
         filter: "full",
         startIndex: AppState.startIndex,
         rating: "4", // only include books with a rating of 4 or higher
         inLanguage: "en", // only include books written in English
         subject: "description", // only include books that have a description
         type: "written_work", // only include written works (excludes research papers, comics, etc.)
       },
     });
    // console.log(res.data.items);
    let books = res.data.items.map((b) => new Book(b));
   
    AppState.sPBooks = books;
    // console.log(AppState.sPBooks);
  }

  async addBookToDb(book) {
    let found = AppState.books.find((b) => b.id == book.id);
    if (found) {
      return
    }
    let bookDB = new SQLBook(book, true);
    // console.log(bookDB, "newBook");
    const res = await api.post("api/books", bookDB);
    let newBook = new SQLBook(res.data)
    // console.log(newBook, 'newBook');
    // let newBook = new Book(res.data);
    AppState.books = [...AppState.books, newBook];
    return newBook
  }

  async getBookInformation(id) {
    const res = await googleBookApi.get(`/volumes/${id}`);
  
  }

  async searchByCategory(term) {
 console.log(term +"+subject");
//  AppState.categoryQuery = term
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: term,
        maxResults: 24,
        printType: "books", // only include books
        filter: "full",
        startIndex: AppState.startIndex,
        rating: "4", // only include books with a rating of 4 or higher
        inLanguage: "en", // only include books written in English
        subject: "description", // only include books that have a description
        type: "written_work", // only include written works (excludes research papers, comics, etc.)
      },
    });
  
    // AppState.totalItems = res.data.totalItems;

  //  console.log("totalItems", res.data.totalItems);
    let results = res.data.items.map((b) => new Book(b));
    
     AppState.sPBooks = results
    // AppState.sPBooks = res.data.items.map((b) => new Book(b));

  }
  async searchByAuthor(author) {
  //  console.log(author);
    // AppState.categoryQuery
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: author,
        maxResults: 24,
        startIndex: AppState.startIndex,
      },
    });

    AppState.totalItems = res.data.totalItems;
    AppState.sPBooks = res.data.items.map((b) => new Book(b));

    // router.push({ name: "Home" });
  }

  async getBookReviews(id) {
   // console.log(id);
    const res = await api.get(`api/reviews/${id}`);
    AppState.reviews = res.data.map((r) => new Review(r));
    // console.log(AppState.reviews);
  }

  async getMySQLBooks() {
    const res = await api.get(`api/books`);
    // console.log("[MySQL]", res.data);
    AppState.books = res.data.map((b) => new SQLBook(b));
  }

  async searchByTitle(title) {
   // console.log(title);
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: title,
        maxResults: 24,
        // startIndex: AppState.startIndex,
      },
    });
    AppState.aPBooks = res.data.items.map((a) => new Book(a));
    //console.log("totalItems", res.data.totalItems);
  }

  async getAuthorsList() {
    const res = await api.get("api/books/authors");
    // console.log("AuthorList", res.data);
    let authors = res.data.map((a) => a.authors);
    let categories = res.data.map((a) => a.categories);
    // res.data.map(r => AppState.categoryList.push(r.categories))
    // console.log(authors);
    filterDuplicates(authors, AppState.authorList);

    filterDuplicates(categories, AppState.categoryList);
    // console.log("authorListAPP", AppState.authorList);
    // console.log("CategoryListAPP", AppState.categoryList);
  }

  filterDuplicates(arr1, arr2) {
    arr1.forEach((i) => {
      let found = arr2.find((f) => f == i);
      if (!found) {
        arr2.push(i);
      }
    });
  }
  filterDuplicateCategories(arr1, arr2) {
    arr1.forEach((i) => {
      let found = arr2.find((f) => f.categories == i.categories);
      if (!found) {
        arr2.push(i.categories);
      }
    });
  }
}
export const bookService = new BookService();
