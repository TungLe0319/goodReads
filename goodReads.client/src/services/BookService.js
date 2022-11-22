import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { Review } from "../models/Review.js";
import { router } from "../router.js";
import { api, googleBookApi } from "./AxiosService.js";

class BookService {

  async getBooks(){

    if (AppState.books.length ==10) {
      return
    }
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: "Alan Watts",
        maxResults:10,
      },
    });
    // console.log(res.data.items);

    let books = res.data.items.map((b) => new Book(b)); 

    AppState.books = res.data.items.map(b => new Book(b))
  }
  async searchByQuery(term){
       const res = await googleBookApi.get("/volumes", {
         params: {
           q: term,
           maxResults: 40,
         },
       });
       
       AppState.books = res.data.items.map((b) => new Book(b));
  }

  async getBookInformation(id){
    const res = await googleBookApi.get(`/volumes/${id}`);
    console.log("res",res.data);
    // AppState.extraDetails= new Book(res.data)
    // console.log(AppState.extraDetails);
   if (AppState.activeBook) {
     AppState.activeBook.largeImg = res.data.volumeInfo.imageLinks?.large;
   }
    // console.log(AppState.activeBook.largeImg);
   
  }

  async searchByCategory(term) {
    const res = await googleBookApi.get("/volumes", {
      params: {
        q: term,
        maxResults: 40,
      },
    });
    AppState.books = res.data.items.map((b) => new Book(b));
    
    router.push({name: 'Home'})
  }

  async getBookReviews(id){
    console.log(id);
    const res = await api.get(`api/reviews/${id}`)
    AppState.reviews = res.data.map(r=> new Review(r))
    console.log(AppState.reviews);
  }
}
export const bookService = new BookService();
