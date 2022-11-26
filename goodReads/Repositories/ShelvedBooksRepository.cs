namespace goodReads.Repositories;

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

    int Id = _db.ExecuteScalar<int>(sql, shelfBookData);

    return GetById(Id);
  }


  internal bool DeleteShelfBook(int id)
  {
    return _db.Execute("DELETE FROM shelfBooks WHERE id = @id", new { id }) == 1;
  }

  internal List<ShelvedBook> GetAccountShelvedBooks(string userId)
  {
    var sql = @"
         SELECT 
         sb. *,
         a.*,
         b.*
         FROM shelfBooks sb
         JOIN accounts a ON a.id = sb.creatorId
         JOIN books b on b.id = sb.bookId
         WHERE sb.creatorId = @userId
         GROUP BY sb.id
      
              ; ";
    return _db.Query<ShelvedBook, Profile, ShelvedBook>(sql, (book, profile) =>
     {
       book.creatorId = profile.Id;

       return book;
     }).ToList();

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