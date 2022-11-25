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
              img,
              largeImg,
              authors,
              publisher,
              publishedDate,
              pageCount,
              categories,
              description,
              maturityRating,
              language,
              printType,
              previewLink,
              country,
              isEBook,
              saleability,
              flavorText,
              retailPrice,
              averageRating

            )
            VALUES (
              @Id,
              @Title,
              @Img,
              @LargeImg,
              @Authors,
              @Publisher,
              @PublishedDate,
              @PageCount,
              @Categories,
              @Description,
              @MaturityRating,
              @Language,
              @PrintType,
              @PreviewLink,
              @Country,
              @IsEBook,
              @SaleAbility,
              @FlavorText,
              @RetailPrice,
              @AverageRating
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
    return _db.Query<Book>(sql).ToList();

  }

  internal List<Object> GetAuthors()
  {
    var sql = @"
          SELECT 
              authors,categories

          FROM books     
               ; ";
    return _db.Query<Object>(sql).ToList();

  }

  internal List<string>GetCategories(){
    var sql = @"
          SELECT 
              categories

          FROM books     
               ; ";
    return _db.Query<string>(sql).ToList();

  }
}