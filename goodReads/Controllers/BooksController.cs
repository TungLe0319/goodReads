namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]

public class BooksController : ControllerBase
{
  private readonly BooksService _booksService;
  private readonly Auth0Provider _auth0;

  public BooksController(BooksService booksService, Auth0Provider auth0)
  {
    _booksService = booksService;
    _auth0 = auth0;
  }

  [HttpPost]
  public async Task<ActionResult<Book>> CreateBook([FromBody] Book bookData)
  {
    try
    {
      var userInfo = await _auth0.GetUserInfoAsync<Account>(HttpContext);

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


}