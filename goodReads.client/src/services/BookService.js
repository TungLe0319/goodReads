import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { Review } from "../models/Review.js";
import { SQLBook } from "../models/SQLBook.js";
import { router } from "../router.js";
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

    for (const b  of books) {
    b.categories = b.categories.toString()
    b.authors = b.authors.toString()
      const book = await api.post("api/books",b)
      console.log(book.data);
    }

    AppState.books = res.data.items.map((b) => new Book(b));
  }
  async searchByQuery(term) {
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: term,
        maxResults: 40,
      },
    });
console.log(res.data);
    // AppState.books = res.data.items.map((b) => new Book(b));
  }

  async getBookInformation(id) {
    const res = await googleBookApi.get(`/volumes/${id}`);
    console.log("res", res.data);
    // AppState.extraDetails= new Book(res.data)
    // console.log(AppState.extraDetails);
    if ( res.data.volumeInfo.imageLinks.large) {
      AppState.activeBook.largeImg = res.data.volumeInfo.imageLinks?.large;
    }
    AppState.activeBook.categories = AppState.activeBook.categories.toString()
    AppState.activeBook.author = AppState.activeBook.author.toString()
    let book = AppState.books
  const res2 = await api.post('api/books',AppState.activeBook)
  console.log(res2.data);
    // console.log(AppState.activeBook.largeImg);
  }

  async searchByCategory(term) {
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: term,
        maxResults: 40,
      },
    });
    AppState.books = res.data.items.map((b) => new Book(b));
     

    router.push({ name: "Home" });
  }

  async getBookReviews(id) {
    console.log(id);
    const res = await api.get(`api/reviews/${id}`);
    AppState.reviews = res.data.map((r) => new Review(r));
    console.log(AppState.reviews);
  }

  async getMySQLBooks() {
    const res = await api.get(`api/books`);
    console.log("[MySQL]", res.data);
    AppState.books = res.data.map(b => new SQLBook(b))
  }
}
export const bookService = new BookService();
