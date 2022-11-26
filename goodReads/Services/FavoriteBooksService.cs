namespace goodReads.Services;
public class FavoriteBooksService{
  private readonly FavoriteBooksRepository _favBookRepo;

  public FavoriteBooksService(FavoriteBooksRepository favBookRepo)
  {
    _favBookRepo = favBookRepo;
  }
}