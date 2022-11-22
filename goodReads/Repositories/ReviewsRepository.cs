namespace goodReads.Repositories;
public class ReviewsRepository
{
  private readonly IDbConnection _db;
  public ReviewsRepository(IDbConnection db)
  {
    _db = db;
  }

  internal Review CreateReview(Review reviewData)
  {

  var sql = @"
          INSERT INTO
          reviews (body,recommend,creatorId,bookId)
          VALUES (@Body,@Recommend,@CreatorId,@BookId);
          SELECT LAST_INSERT_ID()
              ; ";

   int test  = _db.ExecuteScalar<int>(sql, reviewData);
reviewData.Id = test;

    return reviewData;
  }

  internal List<Review> GetAllReviews()
  {
    var sql = @"
           SELECT 
           r. *,
           a.*
           FROM reviews r
           JOIN accounts a ON a.id = r.creatorId       
           GROUP BY r.id
        
                ; ";
    return _db.Query<Review, Profile, Review>(sql, (review, profile) =>
     {
       review.Creator = profile;

       return review;
     }).ToList();

  }

  internal List<Review> GetBookReviews(string bookId)
  {
    var sql = @"
           SELECT 
           r.*,
           a.*
           FROM reviews r
           JOIN accounts a ON a.id = r.creatorId
           WHERE r.bookId = @bookId
           GROUP BY r.id
        
                ; ";
     return _db.Query<Review, Profile,Review >(sql, (review, profile) =>
      {
        review.Creator = profile;
        
        return review;
      },new {bookId}).ToList();
  
  }
}