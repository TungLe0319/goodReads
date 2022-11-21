namespace goodReads.Models;

public class Review : IHasCreator
{

  public string Body { get; set; }
  public int BookId { get; set;}

  public string CreatorId { get; set; }
  public Profile Creator { get; set; }
  public int Id { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }
}