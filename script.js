const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]


const funcPoke = (objeto) => {
  const novoObjeto = {
    ...objeto,
    vida: 100
  }
  return novoObjeto
}


const pokemonsVidaCheia = pokemons.map(funcPoke)

console.log(pokemonsVidaCheia)

const pokemonsDeFogo = pokemons.filter((cadaPoke) => {return cadaPoke.tipo ==="fogo"})

console.log(pokemonsDeFogo)

// const arrayOriginal = [4, 6, 8, 4, 3, 10, 7, 9, 2]

// const multiplicaArrayFor = (array) =>{
//   let novoArray = []
//   for(let elem of array){
//     novoArray.push(elem * 3)
//   }
//   return novoArray
// }

// // console.log(multiplicaArrayFor(arrayOriginal))

// const arrayParesFor = (array) => {
//   let novoArray = []
//   for(let elem of array){
//     if(elem % 2 === 0){
//       novoArray.push(elem)
//     }
//   }
//   return novoArray
// }

// // console.log(arrayParesFor(arrayOriginal))

// const imprimirArray = (array, callback) => {
//   console.log(callback(array))
// }

// // imprimirArray = (arrayOriginal, multiplicaArrayFor)
// // imprimirArray = (arrayOriginal, arrayParesFor)


// // usando map()

// const multiplica = arrayOriginal.map((cadaElem) => {return cadaElem * 3})

// console.log(multiplica)

// // usando filter()

// const arrayPares = arrayOriginal.filter((cadaElem) => {return cadaElem % 2 === 0})

// console.log(arrayPares)

