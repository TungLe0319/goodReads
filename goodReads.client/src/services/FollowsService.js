import { api } from "./AxiosService.js";

class FollowsService {
  async followingUserId(accountId) {
    const res = await api.post(`api/follows`, accountId);
  }
}
export const followsService = new FollowsService();
