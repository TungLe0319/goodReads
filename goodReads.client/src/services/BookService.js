import { AppState } from "../AppState.js";
import { googleBookApi } from "./AxiosService.js";

class BookService {

  async getBooks(){
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: "pitbulls",
        maxResults:40,
      },
    });
    console.log(res);
    AppState.books = res.data.items.map(b => b)
  }
}
export const bookService = new BookService();
