namespace goodReads.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : IController
{
  public AccountController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService, ProfilesService profilesService, FavoriteBooksService favBooksService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService, profilesService, favBooksService)
  {
  }

  [HttpGet]
  [Authorize]
  public async Task<ActionResult<Account>> Get()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

      var options = new PusherOptions
      {
        Cluster = "us3",
        Encrypted = true
      };

      var pusher = new Pusher(
        "1512865",
        "5b205b8c9c1634b6853d",
        "6e33b4ad32d2e6ff6e29",
        options);

      var result = await pusher.TriggerAsync(
        "my-channel",
        "my-event",
        new { user = userInfo });

      return Ok(_accountService.GetOrCreateProfile(userInfo));
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }


  [HttpGet("bookshelves")]
  [Authorize]
  public async Task<ActionResult<List<BookShelf>>> GetAccountBookShelves()
  {
    try
    {
      var userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

      List<BookShelf> bookShelf = _bookShelvesService.GetAccountBookShelves(userInfo.Id);
      return Ok(bookShelf);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }


  [HttpGet("following")]
  public async Task<ActionResult<List<Follow>>> GetAllFollowing()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

      List<Follow> follows = _followsService.GetAllFollowing(userInfo?.Id);
      return Ok(follows);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }
  [HttpGet("followers")]
  public async Task<ActionResult<List<Follow>>> GetAllFollowers()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

      List<Follow> follows = _followsService.GetAllFollowers(userInfo?.Id);
      return Ok(follows);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }


  [HttpPut]
  [Authorize]
  public async Task<ActionResult<Account>> Edit([FromBody] Account accountData)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      accountData.Id = userInfo.Id;
      Account keep = _accountService.Edit(accountData, accountData?.Id);
      return Ok(keep);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }


  [HttpGet("reviews")]
  public async Task<ActionResult<List<Review>>> GetAccountReviews()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      List<Review> reviews = _reviewService.GetAccountReviews(userInfo?.Id);
      return Ok(reviews);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



}
