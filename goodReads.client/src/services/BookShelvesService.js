import { AppState } from "../AppState.js";
import { ShelvedBook } from "../models/ShelvedBook.js";
import { addMany, addOne } from "../utils/Functions.js";
import { api } from "./AxiosService.js";

class BookShelvesService {
  async addToBookShelf(data, book) {
    const res = await api.post("api/shelvedbooks", data);
    // console.log(res.data);
    res.data.book = book
    let newBook = new ShelvedBook(res.data, true)
    console.log(newBook);




   

    AppState.accountShelvedBooks = [...AppState.accountShelvedBooks, newBook]
    // addMany(AppState.accountShelvedBooks, res.data, new ShelvedBook)
  }
  findBook() {
    AppState.accountBookshelves.forEach(s => s.hasActiveBook = false)
    AppState.activeBookShelf = null
  

    let bookId = AppState.activeBook.id;
    for (const shelf of AppState.accountBookshelves) {
      let shelved = AppState.accountShelvedBooks.filter(
        (s) =>  s.id == bookId && s.bookShelfId == shelf.id
      );
      for (const book of shelved) {
        if (book.id == bookId) {
          shelf.hasActiveBook = true;
          console.log(shelf);
        }
      }
    }
    console.log(AppState.accountShelvedBooks.map(s => new Object({title: s.title, shelf:s.bookShelfId})), "books");
    console.log(AppState.accountBookshelves.map(g=> g.hasActiveBook), "shelves");
  }
}
export const bookShelvesService = new BookShelvesService();
