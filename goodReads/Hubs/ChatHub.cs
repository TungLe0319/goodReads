namespace goodReads.Hubs;
public class ChatHub : Hub
{

  protected readonly Auth0Provider _auth0Provider;

  public ChatHub(Auth0Provider auth0Provider)
  {
    _auth0Provider = auth0Provider;
  }

  public void BroadCastMessage(string message)
  {
    Clients.All.SendAsync("ReceiveMessage", message);

  }

  public async Task AddToGroup(string groupName)
  {
    await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

    await Clients.Group(groupName).SendAsync("Send", $"{Context.ConnectionId} has joined the group {groupName}.");
  }

  public async Task RemoveFromGroup(string groupName)
  {
    await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
    // Clients.

    await Clients.Group(groupName).SendAsync("Send", $"{Context.ConnectionId} has left the group {groupName}.");
  }

  public Task SendPrivateMessage(string user, string message)
  {

    return Clients.User(user).SendAsync("ReceiveMessage", message);
  }








}