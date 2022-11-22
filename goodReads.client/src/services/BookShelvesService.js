import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class BookShelvesService{


  async createBookShelf(data){
const res = await api.post(`api/bookshelves`,data)
     console.log('[bookshelves]',res.data);
    //  console.log(AppState.bookshelves);
  }
  async editBookShelf(){

  }
  async deleteBookShelf(){
    
  }
}
export const bookShelvesService = new BookShelvesService()