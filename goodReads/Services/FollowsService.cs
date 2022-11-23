namespace goodReads.Services;

public class FollowsService{
   protected readonly FollowsRepository _followsRepo;

  public FollowsService(FollowsRepository followsRepo)
  {
    _followsRepo = followsRepo;
  }
}