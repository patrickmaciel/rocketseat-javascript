"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Patrick';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Uea');
};

MinhaLista.mostraUsuario();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
var a = 1; // a = 3; // error

console.log('constante a = ' + a);
var usuario = {
  nome: 'Patrick'
};
usuario.nome = 'Cleiton';
console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
console.log('======================================');
console.log('ARRAY OPERATIONS');
console.log('======================================');
var arr = [1, 2, 3, 4, 5];
var newArray = arr.map(function (item, index) {
  return item * 2 + index;
});
console.log('map');
console.log(arr);
console.log(newArray);
var sum = arr.reduce(function (total, next) {
  console.log(total, next);
  return total + next;
});
console.log('sum');
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log('filter');
console.log(filter);
var find = arr.find(function (item) {
  return item === 9;
});
console.log('find');
console.log(find); // * arrow functions

console.log('======================================');
console.log('ARROW FUNCTIONS');
console.log('======================================');
var newArray2 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray2);
var newArray3 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray3);
var newArray4 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray4);
var newArray5 = arr.map(function (item) {
  return item * 2;
});
console.log(newArray5);

var teste2 = function teste2() {
  return 'teste2';
};

console.log(teste2());

var teste3 = function teste3() {
  return {
    nome: 'Patrick'
  };
};

console.log(teste3());
console.log('======================================');
console.log('DEFAULT VALUES');
console.log('======================================');

function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma2(1));

var soma3 = function soma3() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(soma3(1));
