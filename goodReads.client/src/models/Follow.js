import { Account } from "./Account";

export class Follow {
  constructor(data) {
    this.id = data.id;
    this.creatorId = data.creatorId;
    this.followingUserId = data.followingUserId;
    this.createdAt = this.getDate(data.createdAt)
    this.updatedAt = this.getDate(data.updatedAt)
    // populated
    this.profile = new Account(data.profile);
  }
  getDate(date) {
    return new Date(date).toLocaleDateString("en-Us", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}
