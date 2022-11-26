import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { api, googleBookApi } from "./AxiosService.js";
import { bookService } from "./BookService.js";

class FavoriteBooksService {
  async addFavoriteBook(id, book) {
    const res = await api.post("api/favoritebooks", id);
    console.log(res.data);
    // AppState.favoriteBooks = res.data.map(f=> new Book(f))

    const favBook = await bookService.addBookToDb(book);
    //  const res2 = await googleBookApi.get(`/volumes/${id.bookId}`)
    //  res.data.book = res2.data
    if (favBook) {
      AppState.favoriteBooks.push(favBook);
    } else {
      let alreadyHave = AppState.books.find((b) => b.id == book.id);
      AppState.favoriteBooks.push(alreadyHave);
    }
  }

  async removeFavoriteBook(id) {
    const res = await api.delete(`api/favoritebooks/${id}`);
    AppState.favoriteBooks = AppState.favoriteBooks.filter((f) => f.id != id);
  }
}
export const favoriteBooksService = new FavoriteBooksService();
