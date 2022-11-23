namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FollowsController : IController
{
  public FollowsController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService)
  {
  }

  [HttpPost]
  public async Task<ActionResult<Follow>> Create([FromBody] Follow followData)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      Follow follow = _followsService.CreateFollow(followData, userInfo?.Id);
      return Ok(follow);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  
    [HttpDelete("{followId}")]
    [Authorize]
    public async Task<ActionResult<string>> DeleteFollow(int followId)
    {
      try
      {
        Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
        _followsService.DeleteFollow(followId, userInfo.Id);
        return Ok("Follow deleted");
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  

}
