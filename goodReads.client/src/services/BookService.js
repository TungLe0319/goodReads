import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { googleBookApi } from "./AxiosService.js";

class BookService {

  async getBooks(){
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: "Alan Watts",
        maxResults:10,
      },
    });
    console.log(res.data.items);
    AppState.books = res.data.items.map(b => new Book(b))
  }
  async searchByQuery(term){
       const res = await googleBookApi.get("/volumes", {
         params: {
           q: term,
           maxResults: 40,
         },
       });
       console.log(res.data.items);
       AppState.books = res.data.items.map((b) => new Book(b));
  }

  async getBookInformation(id){
    const res = await googleBookApi.get(`/volumes/${id}`);
    console.log("re",res);
    console.log(AppState.activeBook);
  }
}
export const bookService = new BookService();
