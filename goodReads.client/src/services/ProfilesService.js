import { AppState } from "../AppState.js";
import { BookShelf } from "../models/BookShelf.js";
import { Follow } from "../models/Follow.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ProfilesService {
  async getProfile(id) {
    const res = await api.get(`api/profiles/${id}`);
   // console.log("activeProfile", res.data);
    AppState.activeProfile = res.data;
  //  console.log(AppState.activeProfile);
  }

  async getProfileBookshelves(id) {
    const res = await api.get(`api/profiles/${id}/bookshelves`);
    // console.log(res.data, "getProfileBookshelves");
    AppState.activeProfileBookshelves = res.data.map((a) => new BookShelf(a));
  }

  async getProfileFollows(id) {
    const res = await api.get(`api/profiles/${id}/following`);
    // console.log(res.data, "getProfileFollowing");
    AppState.activeProfileFollowing = res.data.map((a) => new Follow(a));
  }

  async getProfileFollowers(id) {
    const res = await api.get(`api/profiles/${id}/followers`);
    // console.log(res.data, "getProfileFollowers");
    AppState.activeProfileFollowers = res.data.map((a) => new Follow(a));
 //   console.log("appState", AppState.activeProfileFollowers);
  }
}

export const profilesService = new ProfilesService();
