// //criando objeto
// const estudante = {
//     nome: 'Carlos Henrique',
//     sobrenome: 'cunha da silva',
//     matricula: 201608156541,
//     notaSemestre: [10,10,9.5]

// }
// //adicionando ao objeto
// estudante.modulo ="HTML semântico"

// //printando
// console.log (estudante)
// console.log (estudante.notaSemestre[1])
// console.log (estudante.sobrenome)

// //copiando objeto
// const copiaEstudante ={... estudante}
// console.log(copiaEstudante)
// //alterando objeto
// copiaEstudante.nome = 'Sulandy'
// console.log(copiaEstudante)
// //add nota nove as notas do semestre

// copiaEstudante.notaSemestre.push(9)
// console.log(copiaEstudante)
// //alterando módulo
// copiaEstudante.modulo ='flexbox'
// console.log(copiaEstudante)

// let estudantes = []
// estudantes.push(estudante,copiaEstudante);
// console.log(estudantes)

const carrinho  = {

    nome: "Lucas Neto",
    pagamento: "A vista",
    endereco: "SP"
}

carrinho.compras = []

const compra1={
    nome:"figets spinner",
    preço:9.98,
    quantidade:2,
}
const compra2={
    nome:"slimer",
    preço:5.99,
    quantidade:5,
}
const compra3={
    nome:"nutela",
    preço:23.99,
    quantidade: 1200,
}

carrinho.compras.push(compra1,compra2,compra3)

console.log(carrinho.compras[0].quantidade+carrinho.compras[1].quantidade+carrinho.compras[2].quantidade);

const carrinhoPresente = {... carrinho};

carrinhoPresente.nome ="Felipe Neto";
carrinhoPresente.pagamento="Cartão Presente";

console.log(carrinhoPresente);
console.log(carrinho);