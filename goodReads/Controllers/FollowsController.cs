namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FollowsController : IController
{
  public FollowsController(Auth0Provider auth0Provider, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService) : base(auth0Provider, reviewService, followsService, booksService, bookShelvesService)
  {
  }

  [HttpPost]
  public async Task<ActionResult<List<Follow>>> Create([FromBody] string value)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);


      return Ok();
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

}
