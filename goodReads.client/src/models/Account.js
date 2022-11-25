export class Account {
  constructor(data) {
    this.id = data.id || data._id
    this.email = data.email
    this.name = data.name.split("@")[0]
    this.picture = data.picture
    // TODO add additional properties if needed
  }
}
