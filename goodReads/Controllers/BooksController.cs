namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]

public class BooksController : IController
{
  public BooksController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService, ProfilesService profilesService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService, profilesService)
  {
  }

  [HttpPost]
  public async Task<ActionResult<Book>> CreateBook([FromBody] Book bookData)
  {
    try
    {
      var userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);

      Book book = _booksService.CreateBook(bookData);
      return Ok(book);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



  [HttpGet]
  public ActionResult<List<Book>> GetAllBook()
  {
    try
    {
      List<Book> book = _booksService.GetAllBooks();
      return Ok(book);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  [HttpGet("authors")]
  public ActionResult<List<Object>> GetAuthors()
  {
    try
    {
      List<Object> book = _booksService.GetAuthors();
      return Ok(book);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



}