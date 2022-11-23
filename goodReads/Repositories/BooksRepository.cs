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
              currency,
              flavorText,
              buyLink,
              retailPrice,
              averageRating,
              identifiers

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
              @Currency,
              @FlavorText,
              @BuyLink,
              @RetailPrice,
              @AverageRating,
              @Identifiers
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
}