namespace goodReads.Interfaces;

public class IController : ControllerBase
{
  protected readonly Auth0Provider _auth0Provider;
  protected readonly AccountService _accountService;
  protected readonly ReviewsService _reviewService;
  protected readonly FollowsService _followsService;
  protected readonly BooksService _booksService;
  protected readonly BookShelvesService _bookShelvesService;
  protected readonly ShelvedBookService _shelvedBooksService;
  protected readonly ProfilesService _profilesService;
  protected readonly FavoriteBooksService _favBooksService;

  public IController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ShelvedBookService shelvedBooksService, ProfilesService profilesService, FavoriteBooksService favBooksService)
  {
    _auth0Provider = auth0Provider;
    _accountService = accountService;
    _reviewService = reviewService;
    _followsService = followsService;
    _booksService = booksService;
    _bookShelvesService = bookShelvesService;
    _shelvedBooksService = shelvedBooksService;
    _profilesService = profilesService;
    _favBooksService = favBooksService;
  }
}