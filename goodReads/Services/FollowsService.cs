namespace goodReads.Services;

public class FollowsService
{
  protected readonly FollowsRepository _followsRepo;

  public FollowsService(FollowsRepository followsRepo)
  {
    _followsRepo = followsRepo;
  }

  internal Follow CreateFollow(Follow followData, string creatorId)
  {
    Follow follow = _followsRepo.GetOneFollow(followData.FollowingUserId, creatorId);
    if (follow != null)
    {
      throw new Exception("already following");
    }
    followData.creatorId = creatorId;


    Follow newFollow = _followsRepo.CreateFollow(followData);
    return follow;

  }



  internal List<FollowCreator> GetAllFollowing(string userId)
  {
    List<FollowCreator> follows = _followsRepo.GetAllFollowing(userId);
    return follows;
  }

  internal Follow GetById(int followId)
  {
    Follow follow = _followsRepo.GetById(followId);
    if (follow == null)
    {
      throw new Exception("bad id or not valid");
    }
    return follow;



  }
}