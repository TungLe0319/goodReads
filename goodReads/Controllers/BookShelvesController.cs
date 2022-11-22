namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookShelvesController:ControllerBase
{
private readonly Auth0Provider _auth0;
private readonly BookShelvesService _bs;

  public BookShelvesController(Auth0Provider auth0, BookShelvesService bs)
  {
    _auth0 = auth0;
    _bs = bs;
  }

  [HttpPost]
 [Authorize]
  public async Task<ActionResult<BookShelf>> CreateBookShelf([FromBody] BookShelf bookShelfData)
  {
    try
    {

      var userInfo = await _auth0.GetUserInfoAsync<Account>(HttpContext);
      bookShelfData.CreatorId = userInfo.Id;
      BookShelf bookShelf = _bs.CreateBookShelf(bookShelfData);
      return Ok(bookShelf);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }




}