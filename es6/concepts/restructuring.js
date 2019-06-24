const usuario = {
  nome: 'Patrick',
  idade: 23,
  endereco: {
    logradouro: 'Rua fulano de tal',
    cidade: 'Uberlandia'
  }
}

console.log(usuario);

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome, idade, cidade);

function mostraNome(usuario) {
  console.log(usuario.nome);
}
mostraNome(usuario);

function mostraNome2({ nome }) {
  console.log(nome);
}
mostraNome2(usuario);
