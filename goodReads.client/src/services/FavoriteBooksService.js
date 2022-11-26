import { AppState } from "../AppState.js"
import { Book } from "../models/Book.js"
import { api, googleBookApi } from "./AxiosService.js"

class FavoriteBooksService{
async addFavoriteBook(id){
  const res = await api.post('api/favoritebooks',id)
  console.log(res.data);
  // AppState.favoriteBooks = res.data.map(f=> new Book(f))
  
 const res2 = await googleBookApi.get(`/volumes/${id.bookId}`)
 res.data.book = res2.data
 AppState.favoriteBooks.push(res.data)
}

async removeFavoriteBook(id){
  const res = await api.delete(`api/favoritebooks/${id}`)
  AppState.favoriteBooks = AppState.favoriteBooks.filter(f=> f.id != id)
}
}
export const favoriteBooksService = new FavoriteBooksService()