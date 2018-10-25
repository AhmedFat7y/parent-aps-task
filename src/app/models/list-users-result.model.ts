import { UserModel } from "./user.model";

export class ListUsersResultModel {
  constructor(public page: number, public per_page: number, public total: number, public total_pages: number, public data: Array<UserModel>) {
  }
}
