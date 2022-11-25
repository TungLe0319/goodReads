import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { SandBox } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    const res = await SandBox.get(`api/quotes`, {
      params: {
        author:
          "Mark Twain" &&
          "George Orwell" &&
          "Aldous Huxley" &&
          " J.R.R. Tolkien" &&
          "Edgar Allan Poe" &&
          "Oscar Wilde",
      },
    });
    AppState.quote = new Quote(res.data);
  }
}
export const quotesService = new QuotesService();
