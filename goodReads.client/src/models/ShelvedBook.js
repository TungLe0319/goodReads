import { SQLBook } from "./SQLBook";

export class ShelvedBook extends SQLBook {
  constructor(data, toDb = false) {
    super(data.book, toDb);
    this.shelvedId = data.id;
    this.bookShelfId = data.bookShelfId;
    this.creatorId = data.creatorId;
  }
}
