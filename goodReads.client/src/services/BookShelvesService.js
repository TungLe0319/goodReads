import { api } from "./AxiosService.js"

class BookShelvesService{


  async createBookShelf(data){
const res = await api.post(`api/bookshelves`,data)

  }
  async editBookShelf(){

  }
  async deleteBookShelf(){
    
  }
}
export const bookShelvesService = new BookShelvesService()