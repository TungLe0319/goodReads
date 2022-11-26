namespace goodReads.Controllers;



[Route("api/[controller]")]
[ApiController]
public class FavoriteBooksController : IController
{
  public FavoriteBooksController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService, ProfilesService profilesService, FavoriteBooksService favBooksService) : base(auth0Provider, accountService, reviewService, followsService, booksService, bookShelvesService, shelvedBooksService, profilesService, favBooksService)
  {
  }
}
