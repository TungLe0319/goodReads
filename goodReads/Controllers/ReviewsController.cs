namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReviewsController : IController
{
  public ReviewsController(Auth0Provider auth0Provider, ReviewsService reviewService) : base(auth0Provider, reviewService)
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
      Review review = _reviewService.CreateReview(reviewData,userInfo.Id);
      review.Creator = userInfo;
      return Ok(review);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }


  [HttpGet]
  public ActionResult<List<Review>> GetAllReview()
  {
    try
    {
      List<Review> review = _reviewService.GetAllReviews();
      return Ok(review);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

}
