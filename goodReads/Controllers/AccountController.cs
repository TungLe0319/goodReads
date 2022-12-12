namespace goodReads.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : IController
{
  private readonly IHubContext<ChatHub> _hubContext;

  // public IHubContext<ChatHub> HubContext => _hubContext;

  public AccountController(IHubContext<ChatHub> hubContext, Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService, ProfilesService profilesService, FavoriteBooksService favBooksService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService, profilesService, favBooksService)
  {
    _hubContext = hubContext;
  }



  [HttpGet]
  [Authorize]
  public async Task<ActionResult<Account>> Get()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

    
      // await _hubContext.Clients.All.SendAsync("ReceiveMessage", new String(userInfo.Name + ", is online"));


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



  [HttpGet("favoriteBooks")]
  public async Task<ActionResult<List<FavoriteBook>>> GetAccountFavoriteBooks()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      List<FavoriteBook> favoriteBook = _favBooksService.GetAccountFavoriteBooks(userInfo?.Id);
      return Ok(favoriteBook);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



  [HttpGet("shelvedBooks")]
  public async Task<ActionResult<List<ShelvedBook>>> GetAccountShelvedBooks()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      List<ShelvedBook> shelvedBooks = _shelvedBooksService.GetAccountShelvedBooks(userInfo?.Id);
      return Ok(shelvedBooks);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



}
