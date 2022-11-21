import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { router } from "../router.js";
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
     
    //   let book = res.data.items

    //  for (const b of book) {
    
    //   if (b.volumeInfo.imageLinks.thumbnail == undefined) {
    //    b.volumeInfo.imageLinks.thumbnail = b.volumeInfo.imageLinks.smallThumbnail
    //   } 
    //   else{
   
    //     AppState.books.push(new Book(b))
     
    //   }
    //  }

       AppState.books = res.data.items.map((b) => new Book(b));
  }

  async getBookInformation(id){
    const res = await googleBookApi.get(`/volumes/${id}`);
    console.log("res",res.data);
    // AppState.extraDetails= new Book(res.data)
    // console.log(AppState.extraDetails);
    AppState.activeBook.largeImg = res.data.volumeInfo?.imageLinks?.large;
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
}
export const bookService = new BookService();
