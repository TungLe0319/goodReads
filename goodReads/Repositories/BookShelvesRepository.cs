namespace goodReads.Repositories;
public class BookShelvesRepository : BaseRepository
{
  public BookShelvesRepository(IDbConnection db) : base(db)
  {
  }

  internal BookShelf CreateBookShelf(BookShelf bookShelfData)
  {
    var sql = @"
              INSERT INTO
              bookshelves (
                type,
                creatorId
              )
              VALUES (
                @Type,
                @CreatorId
              );
              SELECT LAST_INSERT_ID()
                  ; ";

    bookShelfData.Id = _db.ExecuteScalar<int>(sql, bookShelfData);

    return bookShelfData;
  }

  internal List<BookShelf> GetAccountBookShelves(string userId)
  {
    var sql = @"
         SELECT 
           bs.*,
           a.* 
         FROM bookshelves bs
         JOIN accounts a ON a.id = bs.creatorId
         
         WHERE bs.creatorId =  @userId
   
         ;";

    return _db.Query<BookShelf, Profile, BookShelf>(sql, (bs, p) =>
    {
      bs.Creator = p;
      return bs;
    }, new { userId }).ToList();


  }

  internal List<BookShelf> GetProfileBookShelves(string profileId)
  {
    var sql = @"
    SELECT
    bs.*,
    a.*
    FROM bookshelves bs
    JOIN accounts a ON a.id = bs.creatorId
    WHERE bs.creatorId = @profileId
    ;";

    return _db.Query<BookShelf, Profile, BookShelf>(sql, (bs, p) =>
    {
      bs.Creator = p;
      return bs;
    }, new { profileId }).ToList();
  }
}