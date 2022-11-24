namespace betterAfterBooks.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReviewsController : IController
{
  public ReviewsController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService)
  {
  }

  [HttpPost]
  [Authorize]
  public async Task<ActionResult<Review>> CreateReview([FromBody] Review reviewData)
  {
    try
    {

      var userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

      reviewData.CreatorId = userInfo.Id;
      Review review = _reviewService.CreateReview(reviewData, userInfo.Id);
      review.Creator = userInfo;
      return Ok(review);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }


  [HttpGet("{bookId}")]
  public ActionResult<List<Review>> GetBookReviews(string bookId)
  {
    try
    {
      List<Review> review = _reviewService.GetBookReviews(bookId);
      return Ok(review);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



  [HttpDelete("{reviewId}")]
  [Authorize]
  public async Task<ActionResult<string>> DeleteReview(int reviewId)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      _reviewService.DeleteReview(reviewId, userInfo.Id);
      return Ok("Review deleted");
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }




}
