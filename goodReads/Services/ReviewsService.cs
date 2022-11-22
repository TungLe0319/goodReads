namespace goodReads.Services;
public class ReviewsService
{
private readonly ReviewsRepository _reviewsRepo;

  public ReviewsService(ReviewsRepository reviewsRepo)
  {
    _reviewsRepo = reviewsRepo;
  }

  internal Review CreateReview(Review reviewData, string userId)
  {
   return _reviewsRepo.CreateReview(reviewData);

  }

  internal List<Review> GetAllReviews()
  {
    return _reviewsRepo.GetAllReviews();
  }

  internal List<Review> GetBookReviews(string bookId)
  {
   return _reviewsRepo.GetBookReviews(bookId);
  }
}