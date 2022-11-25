export class SQLBook {
  constructor(data) {
    this.id = data.id;
    this.bookShelfId = data.bookShelfId;
    this.title = data.title;
    this.authors = data.authors;
    this.img = data.img;
    this.publishedDate = data.publishedDate;
    this.publisher = data.publisher;
    this.pageCount = data.pageCount;
    this.categories = data.categories.split(' ') && data.categories.split('&');
    this.description = data.description;
    this.maturityRating = data.maturityRating;
    this.language = data.language;
    this.printType = data.printType;
    this.previewLink = data.previewLink;
    this.dimensions = data.dimensions;
    this.country = data.country
    this.isEbook= data.isEbook || false
    this.saleAbility = data.saleAbility
    if (data.saleAbility == 'NOT_FOR_SALE') {
      this.saleAbility = 'Unavailable'
    }
    this.retailPrice = data.retailPrice
    this.averageRating = data.averageRating
    this.largeImg = data.largeImg
    this.flavorText=data.flavorText
  }
}
