namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookShelvesController : IController
{
  public BookShelvesController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService)
  {
  }

  [HttpPost]
  [Authorize]
  public async Task<ActionResult<BookShelf>> CreateBookShelf([FromBody] BookShelf bookShelfData)
  {
    try
    {

      var userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      bookShelfData.CreatorId = userInfo.Id;
      BookShelf bookShelf = _bookShelvesService.CreateBookShelf(bookShelfData);
      return Ok(bookShelf);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }




}