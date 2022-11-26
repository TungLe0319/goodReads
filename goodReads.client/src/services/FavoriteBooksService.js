import { AppState } from "../AppState.js"
import { Book } from "../models/Book.js"
import { api } from "./AxiosService.js"

class FavoriteBooksService{
async addFavoriteBook(id){
  const res = await api.post('api/favoritebooks',id)
  console.log(res.data);
  // AppState.favoriteBooks = res.data.map(f=> new Book(f))
}
}
export const favoriteBooksService = new FavoriteBooksService()