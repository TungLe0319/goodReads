namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FeedBacksController : ControllerBase
{
  private readonly FeedBacksService _feedBackService;
  private readonly Auth0Provider _auth0;

  public FeedBacksController(FeedBacksService feedBackService, Auth0Provider auth0)
  {
    _feedBackService = feedBackService;
    _auth0 = auth0;
  }

  [HttpPost]
  [Authorize]
  public async Task<ActionResult<string>> CreateFeedBack([FromBody] FeedBack feedBackData)
  {
    try
    {
      var userInfo = await _auth0.GetUserInfoAsync<Account>(HttpContext);
      feedBackData.CreatorId = userInfo?.Id;
      _feedBackService.CreateFeedBack(feedBackData);
      
      return Ok("Sent FeedBack");
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



}