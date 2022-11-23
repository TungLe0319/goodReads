namespace goodReads.Models;

public class Follow : IDbItem<int>
{

  public int Id { get; set; }
  public string creatorId { get; set; }

  public string FollowingUserId { get; set; }
  // public Profile FollowingUser { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }
}
