namespace goodReads.Models;
public class ShelfBook : IDbItem<int>
{

  public string BookId { get; set; }
  public int BookShelfId { get; set; }
  public string CreatorId { get; set; }
  public int Id { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }
}

public class ShelvedBook
{
  public Book Book { get; set; }
  public string BookId { get; set; }
  public int Id { get; set; }
  public int BookShelfId { get; set; }
  public string creatorId { get; set; }

}