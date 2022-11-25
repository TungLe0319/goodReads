namespace goodReads.Services;

public class FeedBacksService
{
  private readonly FeedBacksRepository _feedBackRepo;

  public FeedBacksService(FeedBacksRepository feedBackRepo)
  {
    _feedBackRepo = feedBackRepo;
  }

  internal void CreateFeedBack(FeedBack feedBackData)
  {
   _feedBackRepo.CreateFeedBack(feedBackData);
  }
}