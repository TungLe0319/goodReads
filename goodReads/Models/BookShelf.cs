namespace betterAfterBooks.Models;
public class BookShelf : IHasCreator
{

  public string Type { get; set; }
  public string CreatorId { get; set; }
  public Profile Creator { get; set; }
  public int Id { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }



}
public class Shelf : BookShelf
{
  public Shelf(string type, string creatorId)
  {
    Type = type;
    CreatorId = creatorId;
  }
}

