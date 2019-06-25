class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.registerHandlers();
  }

  registerHandlers() {
    // this.formEl.onsubmit = function(event) {
    //   addRepository(event);
    // }
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();
    this.repositories.push({
      name: 'Patrick Maciel',
      description: 'Engenheiro de Software na Recrutei',
      avatar_url: 'https://avatars3.githubusercontent.com/u/671670?s=460&v=4',
      html_url: 'https://github.com/patrickmaciel'
    });
    console.log(this.repositories);
  }
}

// let MeuApp = new App();
new App();
