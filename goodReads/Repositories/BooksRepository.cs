namespace goodReads.Repositories;
public class BooksRepository : BaseRepository
{
  public BooksRepository(IDbConnection db) : base(db)
  {
  }

  internal Book CreateBook(Book bookData)
  {
    var sql = @"
            INSERT INTO
            books (
              id,
              title,
              authors,
              publisher,
              publishedDate,
              pageCount,
              categories,
              description,
              maturityRating,
              language,
              printType,
              previewLink
            )
            VALUES (
              @Id,
              @Title,
              @Authors,
              @Publisher,
              @PublishedDate,
              @PageCount,
              @Categories,
              @Description,
              @MaturityRating,
              @Language,
              @PrintType,
              @PreviewLink
              )
                ;";
  
     _db.Execute(sql, bookData);
 
      return bookData;
  }

  internal List<Book> GetAllBooks()
  {
   var sql = @"
          SELECT 
          *

          FROM books     
               ; ";
    return _db.Query<Book >(sql).ToList();
 
  }
}