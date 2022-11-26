namespace goodReads.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ProfilesController : IController
{
  public ProfilesController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService, ProfilesService profilesService, FavoriteBooksService favBooksService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService, profilesService, favBooksService)
  {
  }

  [HttpGet("{profileId}")]
  public ActionResult<Profile> GetProfileById(string profileId)
  {
    try
    {
      Profile profile = _profilesService.GetProfileById(profileId);
      return Ok(profile);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  [HttpGet("{profileId}/bookshelves")]
  public ActionResult<List<BookShelf>> GetProfileBookShelves(string profileId)
  {
    try
    {
      List<BookShelf> bookShelf = _bookShelvesService.GetProfileBookShelves(profileId);
      return Ok(bookShelf);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  [HttpGet("{profileId}/following")]
  public ActionResult<List<Follow>> GetProfileFollowings(string profileId)
  {
    try
    {
      List<Follow> follows = _followsService.GetProfileFollowings(profileId);
      return Ok(follows);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

  [HttpGet("{profileId}/followers")]
  public ActionResult<List<Follow>> GetProfileFollowers(string profileId)
  {
    try
    {
      List<Follow> follows = _followsService.GetProfileFollowers(profileId);
      return Ok(follows);
    }
    catch (Exception e)
    {
      return BadRequest(e.Message);
    }
  }

}