import { AppState } from "../AppState.js";
import { ShelvedBook } from "../models/ShelvedBook.js";
import { addMany, addOne } from "../utils/Functions.js";
import { api } from "./AxiosService.js";

class BookShelvesService {
  async addToBookShelf(data) {
    const res = await api.post("api/shelvedbooks", data);
    console.log(res.data);

    // let data = {
    //   book: AppState.activeBook
    // }

    //  AddOne(AppState.accountShelvedBooks, new ShelvedBook(res.data))
    // addMany(AppState.accountShelvedBooks, res.data, new ShelvedBook)
  }
  findBook() {
    debugger
    let bookId = AppState.activeBook.id;
    for (const shelf of AppState.accountBookshelves) {
      let id = shelf.id
      let shelved = AppState.accountShelvedBooks.filter(
        (s) =>  s.id == bookId && s.bookShelfId == shelf.id
      );
      for (const books of shelved) {
        if (books.id == bookId) {
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
