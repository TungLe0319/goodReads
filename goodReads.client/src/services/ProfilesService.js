import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
  async getProfile(id) {
    const res = await api.get(`api/profiles/${id}`)
    // console.log(res.data);
    AppState.activeProfile = res.data
  }

  async getProfileBookshelves(id) {
    const res = await api.get(`api/profiles/${id}/bookshelves`)
    console.log(res.data, "getProfileBookshelves");
  }

  async getProfileFollows(id) {
    const res = await api.get(`api/profiles/${id}/following`)
    console.log(res.data, "getProfileFollowing");
  }

  async getProfileFollowers(id) {
    const res = await api.get(`api/profiles/${id}/followers`)
    console.log(res.data, "getProfileFollowers");
  }
}

export const profilesService = new ProfilesService()