import { AppState } from "../AppState";
import { Account } from "../models/Account";
import { BookShelf } from "../models/BookShelf.js";
import { Follow } from "../models/Follow";
import { Review } from "../models/Review.js";
import { SQLBook } from "../models/SQLBook";
import { ShelvedBook } from "../models/ShelvedBook";
import { logger } from "../utils/Logger";
import { api, googleBookApi } from "./AxiosService";

class AccountService {
  async getAccount() {
    try {
      // Pusher.logToConsole = true;

      // var pusher = new Pusher("5b205b8c9c1634b6853d", {
      //   cluster: "us3",
      // });

      // var channel = pusher.subscribe("my-channel");
      // channel.bind("my-event", function (data) {
      //   AppState.users.push(JSON.stringify(data));
      // });
      const res = await api.get("/account");
      AppState.account = new Account(res.data);
    } catch (err) {
      logger.error("HAVE YOU STARTED YOUR SERVER YET???", err);
    }
  }

  async getAccountBookShelves() {
    const res = await api.get("/account/bookshelves");
    // console.log("[accountBookShelves]", res.data);
    AppState.accountBookshelves = res.data.map((a) => new BookShelf(a));
    // console.log(AppState.accountBookshelves);
  }

  async editAccount(formData) {
    const res = await api.put("/account", formData);
    AppState.account = new Account(res.data);
  }
  async getReviews() {
    const res = await api.get(`/account/reviews`);
    // console.log('reviews',res.data);
    AppState.accountReviews = res.data.map((a) => new Review(a));
  }

  async getFollowing() {
    const res = await api.get(`/account/following`);
    // console.log(res.data);
    AppState.following = res.data.map((f) => new Follow(f));
  }

  async getFollowers() {
    const res = await api.get("/account/followers");
    // console.log(res.data);
    AppState.followers = res.data.map((f) => new Follow(f));
  }
  async getFavoriteBooks() {
    const res = await api.get("/account/favoriteBooks");

    AppState.favoriteBooks = res.data.map((f) => f);
    for (const f of AppState.favoriteBooks) {
      const res2 = await googleBookApi.get(`/volumes/${f.bookId}`);
      f.book = res2.data;
    }
    // console.log(AppState.favoriteBooks);
  }

  async getShelvedBooks() {
    const res = await api.get(`/account/shelvedBooks`);
    // console.log(res.data);
    AppState.accountShelvedBooks = res.data.map((x) => new ShelvedBook(x));
    console.log("SHELVEDBOOK", AppState.accountShelvedBooks);
  }
}

export const accountService = new AccountService();
