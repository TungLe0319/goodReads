import { AppState } from "../AppState.js";
import { ShelvedBook } from "../models/ShelvedBook.js";
import { addMany, addOne } from "../utils/Functions.js";
import { api } from "./AxiosService.js";

class BookShelvesService {
  async addToBookShelf(data) {
    const res = await api.post("api/shelvedbooks", data);
    console.log(res.data);

    //  AddOne(AppState.accountShelvedBooks, new ShelvedBook(res.data))
    // addMany(AppState.accountShelvedBooks, res.data, new ShelvedBook)
  }
  findBook() {
    let bookId = AppState.activeBook.id;
    for (const shelf of AppState.accountBookshelves) {
      let shelved = AppState.accountShelvedBooks.filter(
        (s) => s.bookShelfId != shelf.id && s.id != bookId
      );
      for (const books of shelved) {
        if (books.id == bookId) {
          shelf.hasActiveBook = true;
        }
      }
    }
    console.log(AppState.accountShelvedBooks, "books");
    console.log(AppState.accountBookshelves, "shelves");
  }
}
export const bookShelvesService = new BookShelvesService();
