namespace goodReads.Interfaces;

public class IController : ControllerBase{
  protected readonly Auth0Provider _auth0Provider;

  public IController(Auth0Provider auth0Provider)
  {
    _auth0Provider = auth0Provider;
  }
}