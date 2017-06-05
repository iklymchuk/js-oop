class LoginTest extends BaseTest {
  constructor() {
    super();
    this.name = "Login Test";
    this.user = "testUser";
    this.password = "qwerty";

    var loginPage = new LoginPage();
    loginPage.login(this.user, this.password);
  }
}
