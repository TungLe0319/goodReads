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
    var sql = @"SELECT 
         sb. *,
         b.*
         FROM shelfBooks sb
         JOIN books b on b.id = sb.bookId
         WHERE sb.creatorId = @userId
         GROUP BY sb.id
      
              ;";
    return _db.Query<ShelvedBook, Book, ShelvedBook>(sql, (sb,book) =>
     {
       //  sb.creatorId = profile.Id;
       sb.Book = book;


       return sb;
     }, new { userId }).ToList();

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