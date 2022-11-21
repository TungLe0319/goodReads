namespace goodReads.Interfaces;

public class IController : ControllerBase{
  protected readonly Auth0Provider _auth0Provider;
  protected readonly  ReviewsService _reviewService;

  public IController(Auth0Provider auth0Provider, ReviewsService reviewService)
  {
    _auth0Provider = auth0Provider;
    _reviewService = reviewService;
  }
}