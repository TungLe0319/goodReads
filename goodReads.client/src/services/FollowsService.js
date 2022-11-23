import { AppState } from "../AppState.js";
import { Follow } from "../models/Follow.js";
import { api } from "./AxiosService.js";

class FollowsService {
  async followByUserId(accountId) {
    console.log(accountId);
    const res = await api.post(`api/follows`, accountId);
    let follow = new Follow(res.data);
    console.log(follow);
    AppState.following = [follow, ...AppState.following];
  }
}
export const followsService = new FollowsService();
