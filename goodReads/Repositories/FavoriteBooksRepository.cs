namespace goodReads.Repositories;
public class FavoriteBooksRepository : BaseRepository
{
  public FavoriteBooksRepository(IDbConnection db) : base(db)
  {
  }
}