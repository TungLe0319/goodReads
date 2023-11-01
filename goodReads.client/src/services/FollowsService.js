import { AppState } from "../AppState.js";
import { Follow } from "../models/Follow.js";
import { api } from "./AxiosService.js";

class FollowsService {
  async followByUserId(accountId) {
    // console.log(accountId);
    const res = await api.post(`api/follows`, accountId);
    let follow = new Follow(res.data);
    // console.log(follow);
    AppState.following = [follow, ...AppState.following];
  }
  async unFollowByUserId(id) {
    const res = await api.delete(`api/follows/${id}`);
    // console.log(res.data);
    let index = AppState.following.findIndex((f) => {
      f.id == id;
    });

   AppState.following =  AppState.following.splice(index, 1);
  }
}
export const followsService = new FollowsService();
