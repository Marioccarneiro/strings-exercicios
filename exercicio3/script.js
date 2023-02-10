//Crie a const para a frase aqui

const guardarFrase = 'Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\"'

const trocarVerdePorRosa = guardarFrase.replace(`verde` , `rosa`)
const trocarAzulPorLaranja = guardarFrase.replace(`azul` , `laranja`)

verificarVerde = trocarVerdePorRosa.includes(`verde`)
verificarLaranja = trocarAzulPorLaranja.includes(`laranja`)

console.log(verificarVerde , verificarLaranja)

const fraseExtra = 'mas não deixe o gato sair'

const fraseUpperCase = fraseExtra.toUpperCase()

// console.log(`Jorge tem uma casa verde e com portão azul, 
// com os dizeres:\"BOAS VINDAS, ${fraseUpperCase}\"`)

const fraseComTrechoUpperCase = guardarFrase.replace(`mas não deixe o gato sair` , `MAS NAO DEIXE O GATO SAIR`)

console.log(fraseComTrechoUpperCase)