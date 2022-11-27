import { SQLBook } from "./SQLBook";

export class ShelvedBook extends SQLBook {
  constructor(data) {
    super(data.book);
    this.shelvedId = data.id;
    this.bookShelfId = data.bookShelfId;
    this.creatorId = data.creatorId;
  }
}
