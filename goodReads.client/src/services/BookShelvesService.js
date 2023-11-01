import { AppState } from "../AppState.js";
import { ShelvedBook } from "../models/ShelvedBook.js";
import { addMany, addOne } from "../utils/Functions.js";
import { accountService } from "./AccountService";
import { api } from "./AxiosService.js";

class BookShelvesService {
  async addToBookShelf(data, book) {
    const res = await api.post("api/shelvedbooks", data);
    res.data.book = book
    let newBook = new ShelvedBook(res.data, true)
    AppState.accountShelvedBooks = [...AppState.accountShelvedBooks, newBook]
    // await accountService.getAccountBookShelves()
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
        }
      }
    }

  }


  async function removeFromBookshelf(bookShelvedId){
    
  }
}
export const bookShelvesService = new BookShelvesService();
