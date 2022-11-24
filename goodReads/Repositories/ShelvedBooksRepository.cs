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


  internal bool DeleteShelfBook(int id)
  {
    return _db.Execute("DELETE FROM shelfBooks WHERE id = @id", new { id }) == 1;
  }
  internal ShelfBook GetById(int shelfBookId)
  {
    var sql = @"
    SELECT *
    FROM shelfBooks
    WHERE id = @shelfBookId
    ;";
    return _db.Query<ShelfBook>(sql, new { shelfBookId }).FirstOrDefault();
  }
}