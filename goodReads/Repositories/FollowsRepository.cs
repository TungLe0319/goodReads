namespace goodReads.Repositories;
public class FollowsRepository : BaseRepository
{
  public FollowsRepository(IDbConnection db) : base(db)
  {
  }

  internal Follow CreateFollow(Follow followData)
  {
    var sql = @"INSERT INTO follows (creatorId, followingUserId)
              VALUES (@CreatorId, @FollowingUserId);
              SELECT LAST_INSERT_ID()
                  ;";

    int followId = _db.ExecuteScalar<int>(sql, followData);
    return GetById(followId);
  }

  internal FollowCreator GetById(int followId)
  {
    string sql = @"SELECT follow.*,
                account.*
                FROM follows follow
                join accounts account on account.id = follow.followingUserId
                WHERE follow.id = @followId
                    ;";
    return _db.Query<FollowCreator, Profile, FollowCreator>(sql, (follow, profile) => {
      follow.Profile = profile;
      return follow;
    } , new{ followId }).FirstOrDefault();
  }

  internal Follow GetOneFollow(string followingUserId, string creatorId)
  {
    string sql = @"SELECT 
                follow.*
                FROM follows follow
                WHERE follow.followingUserId = @followingUserId AND Follow.creatorId = @creatorId
                ;";
    return _db.Query<Follow>(sql, new { followingUserId, creatorId }).FirstOrDefault();
  }

  internal List<FollowCreator> GetAllFollowing(string userId)
  {
    var sql = @"SELECT 
                follow.*,
                account.*
                FROM follows follow
                JOIN accounts account ON account.id = follow.followingUserId
                WHERE follow.creatorId = @userId
                GROUP BY follow.id
            
                    ;";
    return _db.Query<FollowCreator, Profile, FollowCreator>(sql, (follow, profile) =>
    {
      follow.Profile = profile;

      return follow;
    }, new { userId }).ToList();

  }

  internal List<FollowCreator> GetAllFollowers(object userId)
  {
    var sql = @"SELECT 
                follow.*,
                account.*
                FROM follows follow
                JOIN accounts account ON account.id = follow.creatorId
                WHERE follow.followingUserId = @userId
                GROUP BY follow.id
            
                    ;";
    return _db.Query<FollowCreator, Profile, FollowCreator>(sql, (follow, profile) =>
    {
      follow.Profile = profile;

      return follow;
    }, new { userId }).ToList();

  }

  internal void DeleteFollow(int followId)
  {
      var sql = @"DELETE FROM follows WHERE id = @followId
                  ;";
    
       var rows = _db.Execute(sql, new {followId});
    if (rows !=1){throw new Exception("Data is bad or Id is Bad");}
    return;
    
  }
}