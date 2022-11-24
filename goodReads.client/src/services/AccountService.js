import { AppState } from '../AppState'
import { Account } from '../models/Account'
import { BookShelf } from "../models/BookShelf.js"
import { Follow } from '../models/Follow'
import { Review } from "../models/Review.js"
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
        Pusher.logToConsole = true;

        var pusher = new Pusher("5b205b8c9c1634b6853d", {
          cluster: "us3",
        });

        var channel = pusher.subscribe("my-channel");
        channel.bind("my-event", function (data) {
          AppState.users.push(JSON.stringify(data));
        });
      const res = await api.get("/account");
      AppState.account = new Account(res.data);
    } catch (err) {
      logger.error("HAVE YOU STARTED YOUR SERVER YET???", err);
    }
  }
  async follow(id) {
    const res = await api.post("/follow", id);
    AppState.follows = [new Follow(res.data), ...AppState.follows];
  }

 async getAccountBookShelves(){
    const res = await api.get("/account/bookshelves");
    console.log(res.data);
    AppState.accountBookshelves = res.data.map(a => new BookShelf(a))
  }
  
  async editAccount(formData) {
    const res = await api.put('/account', formData)
    AppState.account = new Account(res.data)
  }
async getReviews(){
    const res = await api.get(`/account/reviews`);
    console.log(res.data);
    AppState.accountReviews = res.data.map((a) => new Review(a));
}

  async getFollowing(){
    const res = await api.get(`/account/following`)
    console.log(res.data);
    AppState.following = res.data.map(f => new Follow(f))
  }

  async getFollowers(){
    const res = await api.get('/account/followers')
    console.log(res.data);
    AppState.followers = res.data.map(f=> new Follow(f))
  }
}

export const accountService = new AccountService()
