namespace betterAfterBooks.Services;

public class ShelvedBookService
{


  private readonly ShelvedBooksRepository _sbRepo;

  public ShelvedBookService(ShelvedBooksRepository sbRepo)
  {
    _sbRepo = sbRepo;
  }

  internal ShelfBook CreateShelfBook(ShelfBook shelfBookData)
  {
   ShelfBook newShelfBook = _sbRepo.CreateShelfBook(shelfBookData);
return newShelfBook;
  }
}