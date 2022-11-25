export class Quote {
  constructor(data) {
    this._id = data._id;
    this.content = data.content
    this.author = data.author
    this.tags = data.tags
    this.authorSlug = data.authorSlug
  }
}

