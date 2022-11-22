import { Account } from "./Account.js";

export class Review {
  constructor(data) {
    this.id = data.id;
    this.body = data.body;
    this.creator = new Account(data.creator);
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.recommend=data.recommend
  }
}
