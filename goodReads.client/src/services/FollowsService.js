import { AppState } from "../AppState.js";
import { Follow } from "../models/Follow.js";
import { api } from "./AxiosService.js";

class FollowsService {
  async followByUserId(accountId) {
    console.log(accountId);
    const res = await api.post(`api/follows`, accountId);
    AppState.follows = res.data.map(f=> new Follow(f))
  }
}
export const followsService = new FollowsService();
