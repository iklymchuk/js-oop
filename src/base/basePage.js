class BasePage {
  constructor() {
    this.title = "Genaral page";
    this.url;
  }
  getUrl() {
    return this.url;
  }
  getTitle() {
    return this.title;
  }
  openPage() {
    return this.getTitle + " is opening ..."
  }
  isPageOpened() {
    return this.getTitle + " is opened!"
  }
  acceptConfirmation() {
    return "Confirmation was accepted";
  }
}
