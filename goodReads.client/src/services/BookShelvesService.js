import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class BookShelvesService{




  async addToBookShelf(data){
console.log(data);
    const res = await api.post('api/shelvedbooks',data)
    console.log(res.data);
    
  }
}
export const bookShelvesService = new BookShelvesService()