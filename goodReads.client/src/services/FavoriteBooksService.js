import { AppState } from "../AppState.js"
import { Book } from "../models/Book.js"
import { api } from "./AxiosService.js"

class FavoriteBooksService{
async addFavoriteBook(){
  const res = await api.post('api/favoriteBooks')
  AppState.favoriteBooks = res.data.map(f=> new Book(f))
}
}
export const favoriteBooksService = new FavoriteBooksService()