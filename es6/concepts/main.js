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

const arr = [1,2,3,4,5];
const newArray = arr.map(function(item, index) {
  return (item * 2) + index;
});
console.log('map');
console.log(arr);
console.log(newArray);

const sum = arr.reduce(function(total, next) {
  console.log(total, next);
  return total + next;
});
console.log('sum');
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log('filter');
console.log(filter);

const find = arr.find(function(item) {
  return item === 9;
});
console.log('find');
console.log(find);
