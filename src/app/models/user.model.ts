export class UserModel {
  public id: number;
  public first_name: string;
  public last_name: string;
  public avatar: string;
  constructor(source) {
    Object.assign(this, source);
  }
  get name() {
    return (this.first_name || '') + ' ' + (this.last_name || '');
  }
}
