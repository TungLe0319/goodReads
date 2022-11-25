namespace goodReads.Interfaces;

public class IController : ControllerBase{
  protected readonly Auth0Provider _auth0Provider;
  protected readonly AccountService _accountService;
  protected readonly  ReviewsService _reviewService;
  protected readonly  FollowsService _followsService;
  protected readonly BooksService _booksService;
  protected readonly BookShelvesService _bookShelvesService;
  protected readonly ProfilesService _profilesService;

  public IController(Auth0Provider auth0Provider, AccountService accountService, ReviewsService reviewService, FollowsService followsService, BooksService booksService, BookShelvesService bookShelvesService, ProfilesService profilesService)
  {
    _auth0Provider = auth0Provider;
    _accountService = accountService;
    _reviewService = reviewService;
    _followsService = followsService;
    _booksService = booksService;
    _bookShelvesService = bookShelvesService;
    _profilesService = profilesService;
  }
}