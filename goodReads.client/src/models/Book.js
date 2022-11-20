export class Book {
  constructor(data) {
    this.bookId = data.id;
    this.bookShelfId = data.bookShelfId;
    this.title = data.volumeInfo.title;
    this.author = data.volumeInfo.authors;
    this.img = data.volumeInfo.imageLinks.thumbnail;
    this.publishedDate = data.volumeInfo.publishedDate;
    this.publisher = data.volumeInfo.publisher;
    this.pageCount = data.volumeInfo.pageCount;
    this.categories = data.volumeInfo.categories;
    this.description = data.volumeInfo.description;
    this.maturityRating = data.volumeInfo.maturityRating;
    this.language = data.volumeInfo.language;
    this.printType = data.volumeInfo.printType;
  }
}
