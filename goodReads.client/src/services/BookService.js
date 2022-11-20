import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { googleBookApi } from "./AxiosService.js";

class BookService {

  async getBooks(){
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: "pitbulls",
        maxResults:10,
      },
    });
    console.log(res);
    AppState.books = res.data.items.map(b => new Book(b))
  }
}
export const bookService = new BookService();
