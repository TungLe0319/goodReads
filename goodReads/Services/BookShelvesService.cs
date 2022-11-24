namespace betterAfterBooks.Services;
public class BookShelvesService
{

  private readonly BookShelvesRepository _br;

  public BookShelvesService(BookShelvesRepository br)
  {
    _br = br;
  }

  internal BookShelf CreateBookShelf(BookShelf bookShelfData)
  {
    return _br.CreateBookShelf(bookShelfData);
  }

  internal List<BookShelf> GetAccountBookShelves(string userId)
  {
    return _br.GetAccountBookShelves(userId);
  }
}