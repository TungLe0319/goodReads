namespace goodReads.Models;

public class Review : IHasCreator
{

  public string Body { get; set; }
  public string BookId { get; set; }
  public bool? Recommend { get; set; }

  public string CreatorId { get; set; }
  public Profile Creator { get; set; }
  public int Id { get; set; }
  public  Book Book { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }
}

public class ReviewedBook
{

  public string Title { get; set; }
  public string Id { get; set; }
  public string authors { get; set; }
  public string LargeImg { get; set; }
  public string Img { get; set; }
  public string Description { get; set; }
}