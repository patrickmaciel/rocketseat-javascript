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

console.log('======================================');
console.log('ARRAY OPERATIONS');
console.log('======================================');

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

// * arrow functions
console.log('======================================');
console.log('ARROW FUNCTIONS');
console.log('======================================');

const newArray2 = arr.map(function(item) {
  return item * 2;
});
console.log(newArray2);

const newArray3 = arr.map((item) => {
  return item * 2;
});
console.log(newArray3);

const newArray4 = arr.map(item => {
  return item * 2;
});
console.log(newArray4);

const newArray5 = arr.map(item => item * 2);
console.log(newArray5);

const teste2 = () => 'teste2';
console.log(teste2());

const teste3 = () => ({nome: 'Patrick'});
console.log(teste3());

console.log('======================================');
console.log('DEFAULT VALUES');
console.log('======================================');

function soma2(a = 3, b = 6) {
  return a + b;
}
console.log(soma2(1));

const soma3 = (a = 1, b = 2) => a + b;
console.log(soma3(1));
