const formPokemon = document.getElementById("pokemon-form");
console.log(formPokemon);
const inputPokemon = document.getElementById("pokemon-input");

formPokemon.addEventListener("submit", buscarPokemon);

function buscarPokemon(event) {
  event.preventDefault();
  console.log("Ditto");
}
