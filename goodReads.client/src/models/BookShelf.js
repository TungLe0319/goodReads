export class BookShelf {
  constructor(data) {
    this.id = data.id;
    this.creator = data.creator;
    this.type = data.type;
    this.hasActiveBook = data.false || false
  }
}
