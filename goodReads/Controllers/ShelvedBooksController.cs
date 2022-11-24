namespace betterAfterBooks.Controllers;
public class ShelvedBooksController : IController
{
  public ShelvedBooksController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService)
  {
  }



    [HttpPost]
   [Authorize]
    public async Task<ActionResult<ShelfBook>> CreateShelfBook([FromBody] ShelfBook shelfBookData)
    {
      try
      {
        var userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
        shelfBookData.CreatorId = userInfo?.Id;
        ShelfBook example = _shelvedBooksService.CreateShelfBook(shelfBookData);
        return Ok(example);
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  
  
    [HttpDelete("{shelfBookId}")]
    [Authorize]
    public async Task<ActionResult<string>> DeleteShelfBook(int shelfBookId)
    {
      try
      {
        Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
        _shelvedBooksService.DeleteShelfBook(shelfBookId, userInfo.Id);
        return Ok("ShelfBook deleted");
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  
}