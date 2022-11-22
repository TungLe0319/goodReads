namespace goodReads.Models;
public class Book
{
  public string Id { get; set; }

  public string Title { get; set; }

  public string  Img { get; set; }
  public string[] Authors { get; set; }
  public string Publisher { get; set; }
  public string PublishedDate { get; set; }

  public int PageCount { get; set; }
  public string Categories { get; set; }

  public string Description { get; set; }
  public string MaturityRating { get; set; }
  public string Language { get; set; }
  public string PrintType { get; set; }
  public string PreviewLink { get; set; }

}