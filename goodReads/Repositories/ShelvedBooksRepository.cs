namespace betterAfterBooks.Repositories;

public class ShelvedBooksRepository : BaseRepository
{
  public ShelvedBooksRepository(IDbConnection db) : base(db)
  {
  }

  internal ShelfBook CreateShelfBook(ShelfBook shelfBookData)
  {
    var sql = @"
            INSERT INTO
            shelfBooks (
              creatorId,
              bookShelfId,
              bookId
            )
            VALUES (
              @CreatorId,
              @BookShelfId,
              @BookId
            );
            SELECT LAST_INSERT_ID()
                ; ";
  
      shelfBookData.Id = _db.ExecuteScalar<int>(sql, shelfBookData);
 
      return shelfBookData;
  }
}