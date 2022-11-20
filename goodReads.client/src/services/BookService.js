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
    console.log(res.data.items[0]);
    AppState.books = res.data.items.map(b => new Book(b))
  }

  async getBookInformation(id){
    const res = await googleBookApi.get(`/volumes/${id}`)
    console.log(res.data);
  }
}
export const bookService = new BookService();
