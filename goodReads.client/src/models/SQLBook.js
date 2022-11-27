export class SQLBook {
  constructor(data, todb = false) {
    this.id = data.id;
    this.title = data.title;
    this.img = data.img;
    this.publishedDate = data.publishedDate;
    this.publisher = data.publisher;
    this.pageCount = data.pageCount;
    this.description = data.description;
    this.maturityRating = data.maturityRating;
    this.language = data.language;
    this.printType = data.printType;
    this.previewLink = data.previewLink;
    this.country = data.country;
    this.isEbook = data.isEbook || false;
    this.averageRating = data.averageRating;
    this.largeImg = data.largeImg;
    this.flavorText = data.flavorText;
    if (todb === true) {
      this.authors = data.authors.toString();
      this.categories = data.categories.toString();
    } else {
      this.authors = data.authors.split(",");
      this.categories =
        data.categories.split(" ") && data.categories.split("&");
    }
   
  }
}
export class ShelvedBook extends SQLBook {
  constructor(data) {
    super(data.book);
    this.id = data.id;
    this.bookShelfId = data.bookShelfId;
    this.creatorId = data.creatorId;
  }
}


