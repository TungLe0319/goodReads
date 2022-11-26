namespace goodReads.Models;
public class Book
{
  public string Id { get; set; }
  public string Title { get; set; }
  public string Img { get; set; }
  public string LargeImg { get; set; }
  public string Authors { get; set; }
  public string Publisher { get; set; }
  public string PublishedDate { get; set; }
  public int PageCount { get; set; }
  public string Categories { get; set; }
  public string Description { get; set; }
  public string MaturityRating { get; set; }
  public string Language { get; set; }
  public string PrintType { get; set; }
  public string PreviewLink { get; set; }
  public string Country { get; set; }
  public bool IsEBook { get; set; }
  // public string SaleAbility { get; set; }
  public string FlavorText { get; set; }
  // public decimal RetailPrice { get; set; }
  public decimal AverageRating { get; set; }

  public int ShelvedBookId { get; set; }
}