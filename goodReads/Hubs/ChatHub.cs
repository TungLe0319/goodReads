namespace goodReads.Hubs;
public class ChatHub : Hub
{
  public void BroadCastMessage(string message)
  {
    Clients.All.SendAsync("ReceiveMessage", message);
  }






}    