class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = 'Patrick';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Uea');
}
MinhaLista.mostraUsuario();

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

const a = 1;
// a = 3; // error
console.log('constante a = ' + a);

const usuario = { nome: 'Patrick' };
usuario.nome = 'Cleiton';
console.log(usuario);

function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4;
    console.log(x, y);
  }
}

teste(10);
