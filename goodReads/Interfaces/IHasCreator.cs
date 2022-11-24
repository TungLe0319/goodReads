namespace betterAfterBooks.Interfaces;
public interface IHasCreator : IDbItem<int>
{
  string CreatorId { get; set; }
  Profile Creator { get; set; }
}

public interface IDbItem<T>
{
  T Id { get; set; }
  DateTime CreatedAt { get; set; }
  DateTime UpdatedAt { get; set; }
}

