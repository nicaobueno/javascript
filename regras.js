let nome = "Nikao"

let idade = 21

let decimal = 117.5

let lista = [1,2,3];
//retorna UM valor dentro do array
let item = lista.find(f => f == 1);
console.log(item)
//retorna uma nova lista
let itemFilter = lista.filter(i => i == 2);
console.log(itemFilter);
//adicionar itens na fila
lista.push('Ana');
console.log(lista);
//excluir itens da lista <- ultimo
lista.pop();
console.log(lista);
//excluir determinado posição
let index = lista.indexOf('3');
console.log(lista.splice(0,index))

lista = lista.filter(f => f != 2);
console.log(lista);



