namespace betterAfterBooks.Services;
public class BooksService
{

  private readonly BooksRepository _booksRepo;

  public BooksService(BooksRepository booksRepo)
  {
    _booksRepo = booksRepo;
  }

  internal Book CreateBook(Book bookData)
  {
    return _booksRepo.CreateBook(bookData);
  }

  internal List<Book> GetAllBooks()
  {
    return _booksRepo.GetAllBooks();
  }
}