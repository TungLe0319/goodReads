namespace goodReads.Services;

public class ProfilesService
{
  private readonly ProfilesRepository _profilesRepo;

  public ProfilesService(ProfilesRepository profilesRepo)
  {
    _profilesRepo = profilesRepo;
  }

  internal Profile GetProfileById(string profileId)
  {
    return _profilesRepo.GetProfileById(profileId);
  }
}