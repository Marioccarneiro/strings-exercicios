const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// const minhaStringTrimmada = minhaString.trim()

// const minhaStringReplace = minhaString.replace(`________` , `sticioso`)

// console.log(minhaStringTrimmada)
// console.log(minhaString.length)
// console.log(minhaStringTrimmada.length)
// console.log(minhaStringReplace)

const retiraEspaco = (sentenca) => {
    const sentencaCortada = sentenca.trim()

    return sentencaCortada
}

const minhaStringCortada = retiraEspaco(minhaString)
console.log(`Minha string cortada: ${minhaStringCortada}.`)