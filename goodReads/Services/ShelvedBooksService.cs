namespace goodReads.Repositories;

public class ShelvedBooksService {
  private readonly ShelvedBooksRepository _sbRepo;

  public ShelvedBooksService(ShelvedBooksRepository sbRepo)
  {
    _sbRepo = sbRepo;
  }
}