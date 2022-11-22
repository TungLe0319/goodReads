namespace goodReads.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
  private readonly AccountService _accountService;
  private readonly Auth0Provider _auth0Provider;
  private readonly BookShelvesService _bookShelvesService;

  public AccountController(AccountService accountService, Auth0Provider auth0Provider, BookShelvesService bookShelvesService)
  {
    _accountService = accountService;
    _auth0Provider = auth0Provider;
    _bookShelvesService = bookShelvesService;
  }

  [HttpGet]
  [Authorize]
  public async Task<ActionResult<Account>> Get()
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
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


}
