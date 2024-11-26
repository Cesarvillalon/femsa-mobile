import { User, UserService } from "../models/UserService";
import { LoginView } from "../views/LoginView";

export class LoginPresenter {
  constructor(private view: LoginView, private service: UserService) {
    this.view = view;
    this.service = service;
  }

  login(username: string, password: string) {
    const user: User = { username, password };

    this.service.login(user).then((result) => {
      if (result) {
        this.view.showSuccessMsg();
      } else {
        this.view.showErrorMsg();
      }
    });
  }
}