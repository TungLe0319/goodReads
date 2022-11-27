namespace goodReads.Services;

public class ShelvedBookService
{

  private readonly AccountService _accountRepo;
  private readonly ShelvedBooksRepository _sbRepo;

  public ShelvedBookService(AccountService accountRepo, ShelvedBooksRepository sbRepo)
  {
    _accountRepo = accountRepo;
    _sbRepo = sbRepo;
  }

  internal ShelfBook CreateShelfBook(ShelfBook shelfBookData, string userInfo)
  {
    List<ShelvedBook> accountBooks = _sbRepo.GetAccountShelvedBooks(userInfo);
    var found = accountBooks.Find(x => x.BookId == shelfBookData.BookId && x.BookShelfId == shelfBookData.BookShelfId);
    if (found != null)
    {
      throw new Exception("You already have this apart of this list");
    }



    ShelfBook newShelfBook = _sbRepo.CreateShelfBook(shelfBookData);


    return newShelfBook;
  }

  public ShelfBook GetById(int id)
  {
    ShelfBook shelfBook = _sbRepo.GetById(id);

    if (shelfBook == null)
    {
      throw new Exception("Bad Id");
    }


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