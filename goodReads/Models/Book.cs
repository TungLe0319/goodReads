namespace goodReads.Models;
public class Book
{
  public string Id { get; set; }
  public string Title { get; set; }
  public string Author { get; set; }
  public string Publisher { get; set; }
  public int PageCount { get; set; }
  public string Description { get; set; }
  public string Language { get; set; }
  public string PrintType { get; set; }
  public string PreviewLink { get; set; }

}