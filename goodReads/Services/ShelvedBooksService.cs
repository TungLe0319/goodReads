namespace goodReads.Services;

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

  public ShelfBook GetById(int id)
  {
    ShelfBook shelfBook = _sbRepo.GetById(id);
    return shelfBook;

  }

  internal string DeleteShelfBook(int shelfBookId, string userId)
  {
    ShelfBook shelfBook = GetById(shelfBookId);
    if (shelfBook == null)
    {
      throw new Exception("Invalid shelfBook Id");
    }
    if (shelfBook.CreatorId != userId)
    {
      throw new Exception("Unauthorized");
    }

    var deleted = _sbRepo.DeleteShelfBook(shelfBookId);
    if (!deleted)
    {
      throw new Exception("Unable to delete");
    }
    return "Successfully removed from bookShelf";

  }

  internal List<ShelvedBook> GetAccountShelvedBooks(string userId)
  {
  return _sbRepo.GetAccountShelvedBooks(userId);
  }
}