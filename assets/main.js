// https://pokeapi.co/api/v2/pokemon/ditto

const nomePokemon = document.getElementById('pokemon');

const pokemonDados =  document.querySelector('.principal');

const pokedexNome = document.querySelector('.card-nome') ;
const pokedexID = document.querySelector('.card-id') ;
const pokedexTipo = document.querySelector('.card-tipo');
var pokedexImagem = document.querySelector('.card-img');

var pokedexStats = document.querySelectorAll('.stats-numero');

const botaoBusca = document.querySelector('.lupa-img');
const statsId = document.getElementById('pokemon-id');


async function buscaPokemon(nomePokemon) {
    try{
        var pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
        var pokemonConvertido = await pokemon.json();

        var pokemonImagem = pokemonConvertido.sprites.other['official-artwork'].front_default;
        var pokemonNome = pokemonConvertido.name;
        var pokemonID = pokemonConvertido.id;
        var pokemonTipo = pokemonConvertido.types[0].type.name;
        let i=0;

        pokemonDados.classList.toggle('escolhido');

        console.log(pokemonConvertido);

        pokedexNome.innerHTML=pokemonNome;
        pokedexID.innerHTML= "ID: " + pokemonID;
        pokedexTipo.innerHTML = "Tipo: " + pokemonTipo;
        pokedexImagem.setAttribute('src', pokemonImagem);

        pokemonDados.style.cssText =  ' opacity: 1;';

        for(i=0;i<6;i++){
            pokedexStats[i].innerHTML =  pokemonConvertido.stats[i].base_stat;
        }

    }catch(erro){
        console.log("Erro");
    }
}
botaoBusca.addEventListener('click', () => buscaPokemon(nomePokemon.value.toLowerCase()));