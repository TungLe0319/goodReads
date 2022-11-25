namespace goodReads.Repositories;
public class FeedBacksRepository : BaseRepository
{
  public FeedBacksRepository(IDbConnection db) : base(db)
  {
  }

  internal FeedBack CreateFeedBack(FeedBack feedBackData)
  {
    var sql = @"
             INSERT INTO
             feedBacks (
              creatorId,
              body
             )
             VALUES (
              @CreatorId,
              @Body
              );
             SELECT LAST_INSERT_ID()
                 ; ";

    feedBackData.Id = _db.ExecuteScalar<int>(sql, feedBackData);
    return feedBackData;
  }
}