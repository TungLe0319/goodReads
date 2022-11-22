namespace goodReads.Models;
public class BookShelf : IHasCreator
{

  public string Title { get; set; }
  public string Img { get; set; }
  public string Type { get; set; }
  public string CreatorId { get; set; }
  public Profile Creator { get; set; }
  public int Id { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }
}