export class Book {
  constructor(data) {
    this.id = data.id;
    this.bookShelfId = data.bookShelfId;
    this.title = data.volumeInfo.title;
    this.authors = data.volumeInfo.authors;
    this.img =
      data.volumeInfo.imageLinks?.thumbnail ||
      "https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=6&m=1216251206&s=612x612&w=0&h=G8kmMKxZlh7WyeYtlIHJDxP5XRGm9ZXyLprtVJKxd-o=";
    this.publishedDate = data.volumeInfo.publishedDate;
    this.publisher = data.volumeInfo.publisher;
    this.pageCount = data.volumeInfo.pageCount;
    this.categories = data.volumeInfo.categories;
    this.description = data.volumeInfo.description;
    this.maturityRating = data.volumeInfo.maturityRating;
    this.language = data.volumeInfo.language;
    this.printType = data.volumeInfo.printType;
    this.previewLink = data.volumeInfo.previewLink;
    this.dimensions = data.dimensions;
    this.largeImg = data.volumeInfo.imageLinks?.large;
    this.buyLink = data.saleInfo.buyLink;
    this.country = data.saleInfo.country;
    this.isEbook = data.saleInfo.isEbook || false;
    this.saleability = data.saleInfo.saleability;
    this.retailPrice = data.saleInfo.retailPrice?.amount;
    this.currency = data.saleInfo.retailPrice?.currencyCode;
    this.flavorText = data.searchInfo?.textSnippet;
    this.averageRating = data.volumeInfo?.averageRating;
    this.Identifiers = data.volumeInfo?.industryIdentifiers;
  }
}
