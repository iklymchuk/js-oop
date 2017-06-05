class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = "/login";
    this.title = "Login page";
  }
  login(username, password) {
    console.log("CONSOLE: " + username + " : " + password)
    return username + " : " + password;
  }
}
