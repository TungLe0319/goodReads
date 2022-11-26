import { getDate } from "../utils/GetDate.js";
import { Account } from "./Account";

export class Follow {
  constructor(data) {
    this.id = data.id;
    this.creatorId = data.creatorId;
    this.followingUserId = data.followingUserId;
    this.createdAt = getDate(data.createdAt)
    this.updatedAt = getDate(data.updatedAt)
    // populated
    this.profile = new Account(data.profile);
  }

}
