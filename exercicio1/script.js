// const nomeDeUsuario = prompt(`Qual seu nome?`)
// const comidaFavorita1 = prompt(`Qual sua primeira comida favorita?`)
// const comidaFavorita2 = prompt(`Qual sua segunda comida favorita?`)
// const comidaFavorita3 = prompt(`Qual sua terceira comida favorita?`)

// console.log(`Estas sao as comidas favoritas de ${nomeDeUsuario}
// \n comida 1: ${comidaFavorita1}
// \n comida 2: ${comidaFavorita2}
// \n comida 3: ${comidaFavorita3}.`)

function perguntarNomeComida(nome, comida1, comida2, comida3,){
    const frase = `Estas sao as comidas favoritas de ${nome}:
    -${comida1}
    -${comida2}
    -${comida3}`
console.log(frase)
}
const nomeUser = prompt(`Qual eh o seu nome?`)
const comidaFav1 = prompt(`Qual sua comida favorita 1?`)
const comidaFav2 = prompt(`Qual sua comida favorita 2?`)
const comidaFav3 = prompt(`Qual sua comida favorita 3?`)

perguntarNomeComida(nomeUser, comidaFav1, comidaFav2, comidaFav3)