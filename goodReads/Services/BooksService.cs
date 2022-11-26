namespace goodReads.Services;
public class BooksService
{

  private readonly BooksRepository _booksRepo;

  public BooksService(BooksRepository booksRepo)
  {
    _booksRepo = booksRepo;
  }

  internal Book CreateBook(Book bookData)
  {
    Book book = _booksRepo.GetBookById(bookData.Id);
    if (book != null)
    {
      throw new Exception("book already in db");
    }
      return _booksRepo.CreateBook(bookData);
  }

  internal List<Book> GetAllBooks()
  {
    return _booksRepo.GetAllBooks();
  }

  internal List<Object> GetAuthors()
  {
    return _booksRepo.GetAuthors();
  }
}