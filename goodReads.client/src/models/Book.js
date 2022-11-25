export class Book {
  constructor(data, toDB) {
    this.id = data.id;
    this.bookShelfId = data.bookShelfId || delete this.bookShelfId;
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
    // this.dimensions = data?.dimensions
    this.buyLink = data.saleInfo.buyLink;
    this.country = data.saleInfo.country;
    this.isEbook = data.saleInfo.isEbook || false;
    this.saleability = data.saleInfo.saleability;
    this.retailPrice = data.saleInfo.retailPrice?.amount;
    // this.currency = data.saleInfo.retailPrice?.currencyCode;
    this.flavorText = data.searchInfo?.textSnippet;
    this.averageRating = data.volumeInfo?.averageRating;
    this.identifiers = data.volumeInfo?.industryIdentifiers;
    this.largeImg = `http://books.google.com/books/publisher/content?id=${data.id}&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71cWMe7Mn1QYpUrtA6GlLwzckuPGvU2_h0Ilt3PSoajxjZXdfEbt7uyDGa0D-RPuw7ArtF9N-CurJjCOeR2nd7k7td3GZIH-nimVlVwAGDssq9IiDe0lcnyAqEeO8938hE-DDFR&source=gbs_api`;
    if (toDB) {
      this.getAuthors(data.volumeInfo.authors);
    }
  }
  getAuthors(author) {
    let authors;
    authors = author.toString();
    this.authors = authors;
  }
}
