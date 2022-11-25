import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
  async getProfile(id) {
    const res = await api.get(`api/profiles/${id}`)
    // console.log(res.data);
    AppState.activeProfile = res.data
  }
}

export const profilesService = new ProfilesService()