export class FavoritedBook {
  constructor(data) {
    this.bookId = data.id;
 this.img =
   data.volumeInfo.imageLinks?.thumbnail ||
   "https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=6&m=1216251206&s=612x612&w=0&h=G8kmMKxZlh7WyeYtlIHJDxP5XRGm9ZXyLprtVJKxd-o=";

      this.largeImg = `http://books.google.com/books/publisher/content?id=${data.id}&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71cWMe7Mn1QYpUrtA6GlLwzckuPGvU2_h0Ilt3PSoajxjZXdfEbt7uyDGa0D-RPuw7ArtF9N-CurJjCOeR2nd7k7td3GZIH-nimVlVwAGDssq9IiDe0lcnyAqEeO8938hE-DDFR&source=gbs_api`;

  }
}

