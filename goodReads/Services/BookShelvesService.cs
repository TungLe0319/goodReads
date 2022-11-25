namespace goodReads.Services;
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

  internal List<BookShelf> GetProfileBookShelves(string profileId)
  {
    return _br.GetProfileBookShelves(profileId);
  }
}