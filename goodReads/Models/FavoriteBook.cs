namespace goodReads.Models;
public class FavoriteBook : IHasCreator
{


  public string BookId { get; set; }
  public string CreatorId { get ; set ; }
  public Profile Creator { get ; set ; }
  public int Id { get ; set ; }
  public DateTime CreatedAt { get ; set ; }
  public DateTime UpdatedAt { get ; set ; }
}

public class FavoritedBook
{

  public string Id { get; set; }
  public string LargeImg { get; set; }
  public string Img { get; set; }
}