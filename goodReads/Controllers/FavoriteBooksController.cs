namespace goodReads.Controllers;



[Route("api/[controller]")]
[ApiController]
public class FavoriteBooksController : IController
{
  public FavoriteBooksController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService, ProfilesService profilesService, FavoriteBooksService favBooksService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService, profilesService, favBooksService)
  {
  }

  [HttpPost]
 [Authorize]
  public async Task<ActionResult<FavoriteBook>> CreateFavoriteBook([FromBody] FavoriteBook favoriteBookData)
  {
    try
    {
      var userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      favoriteBookData.CreatorId = userInfo?.Id;
      FavoriteBook favoriteBook = _favBooksService.CreateFavoriteBook(favoriteBookData,userInfo?.Id);
      return Ok(favoriteBook);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }



  [HttpDelete("{favoriteBookId}")]
  [Authorize]
  public async Task<ActionResult<string>> DeleteFavoriteBook(int favoriteBookId)
  {
    try
    {
      Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
      _favBooksService.DeleteFavoriteBook(favoriteBookId, userInfo.Id);
      return Ok("FavoriteBook deleted");
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }


}
