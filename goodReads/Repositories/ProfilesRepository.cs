namespace goodReads.Repositories;

public class ProfilesRepository : BaseRepository
{
  public ProfilesRepository(IDbConnection db) : base(db)
  {
  }

  internal Profile GetProfileById(string profileId)
  {
    string sql = @"
    SELECT *
    FROM
    accounts
    WHERE id = @profileId
    ;";
    return _db.Query<Profile>(sql, new { profileId }).FirstOrDefault();
  }
}