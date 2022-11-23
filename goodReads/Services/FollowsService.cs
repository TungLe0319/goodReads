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
    Follow follow = GetById(followData.Id);
    if (follow != null)
    {
      throw new Exception("already following");
    }
    followData.creatorId = creatorId;


    Follow newFollow = _followsRepo.CreateFollow(followData);
    return follow;

  }

  internal List<Follow> GetAllFollowing()
  {
    throw new NotImplementedException();
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