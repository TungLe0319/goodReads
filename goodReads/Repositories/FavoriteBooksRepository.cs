namespace goodReads.Repositories;
public class FavoriteBooksRepository : BaseRepository
{
  public FavoriteBooksRepository(IDbConnection db) : base(db)
  {
  }

  internal FavoriteBook CreateFavoriteBook(FavoriteBook favoriteBookData)
  {
    var sql = @"
             INSERT INTO
             favoriteBooks (
              bookId,
              creatorId
             )
             VALUES (
              @BookId,
              @CreatorId
              );
             SELECT LAST_INSERT_ID()
                 ; ";

    favoriteBookData.Id = _db.ExecuteScalar<int>(sql, favoriteBookData);

    return favoriteBookData;
  }

  internal void DeleteFavoriteBook(int favoriteBookId)
  {
    var sql = @"
              DELETE FROM favoriteBooks WHERE id = @favoriteBookId
          
                  ; ";

    var rows = _db.Execute(sql, new { favoriteBookId });
    if (rows != 1) { throw new Exception("Data is bad or Id is Bad"); }
    return;

  }

  internal List<FavoriteBook> GetAccountFavoriteBooks(string userId)
  {
    var sql = @"
         SELECT 
         fb.*,
         a.*
         FROM favoriteBooks fb
         Join accounts a on a.id = fb.creatorId
         WHERE fb.creatorId = @userId
         GROUP BY fb.id
      
              ; ";
    return _db.Query<FavoriteBook, Profile, FavoriteBook>(sql, (favoriteBook, profile) =>
     {
       favoriteBook.Creator = profile;

      //  favoriteBook.Book = book;
       return favoriteBook;
     }, new { userId }).ToList();


  }

  internal FavoriteBook GetById(int favoriteBookId)
  {
    var sql = @"
         SELECT 
           fb.*,
         FROM favoriteBooks fb     
         WHERE fb.id =  @favoriteBookId 
         ;";

    return _db.Query<FavoriteBook>(sql, new { favoriteBookId }).FirstOrDefault();


  }
}