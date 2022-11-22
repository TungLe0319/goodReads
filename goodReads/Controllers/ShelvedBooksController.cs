namespace goodReads.Controllers;
public class ShelvedBooksController: ControllerBase {
  private readonly Auth0Provider _auth0;
  private readonly ShelvedBooksService _sbService;

  public ShelvedBooksController(Auth0Provider auth0, ShelvedBooksService sbService)
  {
    _auth0 = auth0;
    _sbService = sbService;
  }


  
}