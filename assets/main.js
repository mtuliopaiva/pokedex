// https://pokeapi.co/api/v2/pokemon/ditto

const nomePokemon = document.getElementById('pokemon');
const statsNome = document.getElementById('pokemon-nome');

const botaoBusca = document.querySelector('.lupa-img');
const statsId = document.getElementById('pokemon-id');


async function buscaPokemon(nomePokemon) {
    try{
        var pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
        var pokemonConvertido = await pokemon.json();

        var pokemonImagem = pokemonConvertido.sprites.other['official-artwork'].front_default;
        var pokemonNome = pokemonConvertido.name;

        console.log(pokemonConvertido);
        // console.log(pokemonConvertido.id);
        // console.log(pokemonConvertido.types[0].type.name);
        // console.log(pokemonConvertido.weight/10);
        // console.log(pokemonConvertido.height);

        // Habilidades
        console.log(pokemonConvertido.stats[0].stat.name);
        console.log(pokemonConvertido.stats[0].base_stat);

        console.log(pokemonConvertido.stats[1].stat.name);
        console.log(pokemonConvertido.stats[1].base_stat);

        console.log(pokemonConvertido.stats[2].stat.name);
        console.log(pokemonConvertido.stats[2].base_stat);

        console.log(pokemonConvertido.stats[3].stat.name);
        console.log(pokemonConvertido.stats[3].base_stat);

        console.log(pokemonConvertido.stats[4].stat.name);
        console.log(pokemonConvertido.stats[4].base_stat);

        console.log(pokemonConvertido.stats[5].stat.name);
        console.log(pokemonConvertido.stats[5].base_stat);

        // statsNome.innerHTML=pokemonNome;
        // ImprimiPokemon(pokemonImagem);
    }catch(erro){
        console.log("Erro");
    }
}
botaoBusca.addEventListener('click', () => buscaPokemon(nomePokemon.value.toLowerCase()));


function ImprimiPokemon(imagem){
    let img = document.createElement("img");
    img.src=imagem;
    statsId.appendChild(img);
}