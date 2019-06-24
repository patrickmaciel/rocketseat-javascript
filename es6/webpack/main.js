// carregar todos arquivos através do webpack
// código ainda vai ser transpilado para o bundle com o babel
import * as funcoes from './funcoes';
// import soma, { sub, mult } from './funcoes';
// import { soma as someFunction, sub } from './funcoes';
// import soma from './soma';

// console.log(someFunction(1, 2));
// console.log(soma(1, 2));
// console.log(sub(5, 2));
console.log(funcoes.default(1, 2));
console.log(funcoes.sub(5, 2));
console.log(funcoes.mult(5, 2));
