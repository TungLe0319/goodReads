namespace betterAfterBooks.Services;

public class AccountService
{
  private readonly AccountsRepository _repo;
  private readonly BookShelvesService _bsRepo;

  public AccountService(AccountsRepository repo, BookShelvesService bsRepo)
  {
    _repo = repo;
    _bsRepo = bsRepo;
  }

  internal Account GetProfileById(string email)
  {
    return _repo.GetById(email);
  }

  internal Account GetOrCreateProfile(Account userInfo)
  {
    Account profile = _repo.GetById(userInfo.Id);
    if (profile == null)
    {
      Account account = _repo.Create(userInfo);
      List<BookShelf> bookShelves = new List<BookShelf>{
      {
        new Shelf("favorite", account.Id)
      },
      {
        new Shelf("wishlist", account.Id)
      },
      {
        new Shelf("reading", account.Id)
      },
      {
        new Shelf("finished", account.Id)
      }
     };
      foreach (BookShelf bookShelf in bookShelves)
      {
        BookShelf newShelf = _bsRepo.CreateBookShelf(bookShelf);
      }

      return account;
    }
    return profile;
  }

  internal Account Edit(Account editData, string userId)
  {
    Account original = GetProfileById(userId);
    original.Name = editData.Name.Length > 0 ? editData.Name : original.Name;
    original.Picture = editData.Picture.Length > 0 ? editData.Picture : original.Picture;
    return _repo.Edit(original);
  }
}
