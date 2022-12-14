namespace goodReads.Services;
public class FavoriteBooksService{
  private readonly FavoriteBooksRepository _favBookRepo;

  public FavoriteBooksService(FavoriteBooksRepository favBookRepo)
  {
    _favBookRepo = favBookRepo;
  }

  internal FavoriteBook CreateFavoriteBook(FavoriteBook favoriteBookData, string userId)
  {
    List<FavoriteBook> favoriteBooks = _favBookRepo.GetAccountFavoriteBooks(userId);
    if( favoriteBooks.Capacity >=5)
    {
    throw new Exception("Already have 5");
    }
    
 return  _favBookRepo.CreateFavoriteBook(favoriteBookData);
  }

  internal void DeleteFavoriteBook(int favoriteBookId, string userId)
  {

  _favBookRepo.DeleteFavoriteBook(favoriteBookId);
  }

  internal List<FavoriteBook> GetAccountFavoriteBooks(string userId)
  {
  return _favBookRepo.GetAccountFavoriteBooks(userId);
  }

  internal FavoriteBook GetById(int favoriteBookId){
    return _favBookRepo.GetById(favoriteBookId);
  }
}