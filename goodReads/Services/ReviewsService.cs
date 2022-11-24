namespace betterAfterBooks.Services;
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

  internal void DeleteReview(int reviewId, string userId)
  {
    _reviewsRepo.DeleteReview(reviewId);
  }

  internal List<Review> GetAccountReviews(string userId)
  {
    return _reviewsRepo.GetAccountReviews(userId);
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