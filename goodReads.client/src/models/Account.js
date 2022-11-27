export class Account {
  constructor(data) {
    this.id = data.id || data._id
    this.email = data.email
    this.name = data.name.split("@")[0]
    this.picture = data.picture
    this.bio = data.bio
    this.lightTheme = data.theme || false
    // TODO add additional properties if needed
  }
}
