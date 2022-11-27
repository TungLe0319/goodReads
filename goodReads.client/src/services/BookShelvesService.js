import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class BookShelvesService{
  async addToBookShelf(data){
console.log(data);
    const res = await api.post('api/shelvedbooks',data)
    console.log(res.data);

  }
  async findBook(){
      for (const shelf of AppState.accountBookshelves) {
        let shelved = AppState.accountShelvedBooks.filter(
          (s) => s.bookShelfId != shelf.id
        );
        for (const books of shelved) {
          if (books.id == AppState.activeBook.id) {
            shelf.hasActiveBook = true;
            // console.log('was true');
          }
        }
      }
      console.log(AppState.accountBookshelves);
  }

  async removeFromBookShelf(id){
    await api.delete(`api/shelvedbooks/${id}`)
    AppState.accountShelvedBooks = AppState.accountShelvedBooks.filter(a=> a.shelvedId != id)
  }
}
export const bookShelvesService = new BookShelvesService();
