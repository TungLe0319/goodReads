namespace goodReads.Services;

public class FollowsService
{
  protected readonly FollowsRepository _followsRepo;

  public FollowsService(FollowsRepository followsRepo)
  {
    _followsRepo = followsRepo;
  }

  internal Follow CreateFollow(Follow followData)
  {
      if (followData.creatorId == null)
          {
            throw new Exception("not logged in to follow");
          }
    
    
    Follow follow = GetOneFollow(followData.FollowingUserId, followData.creatorId);
    if (follow != null)
    {
      throw new Exception("already following");
    }


    Follow newFollow = _followsRepo.CreateFollow(followData);
    return follow;

  }

  internal Follow GetOneFollow(string followingUserId, string creatorId)
  {
    Follow follow = _followsRepo.GetOneFollow(followingUserId, creatorId);
    return follow;
  }

  internal void DeleteFollow(int followId, string userId)
  {
    Follow follow = GetById(followId);
      if (follow.creatorId != userId)
          {
            throw new Exception("not your follow to delete");
          }

      _followsRepo.DeleteFollow(followId);

      return;
  }

  internal List<FollowCreator> GetAllFollowers(string userId)
  {
    List<FollowCreator> follows = _followsRepo.GetAllFollowers(userId);
    return follows;
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