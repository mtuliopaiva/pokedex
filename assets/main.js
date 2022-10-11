// https://pokeapi.co/api/v2/pokemon/ditto

const nomePokemon = document.getElementById('pokemon');

const pokedexNome = document.querySelector('.card-nome') ;
const pokedexID = document.querySelector('.card-id') ;
const pokedexTipo = document.querySelector('.card-tipo');
const pokedexHabilidade = document.querySelector('.card-habilidade');
const pokedexAltura = document.querySelector('.card-altura');
const pokedexPeso = document.querySelector('.card-peso');

const pokedexImagem = document.querySelector('.card-img');
const pokedexEstatisticas =document.querySelector('.card-stats');

var pokedexStats = document.querySelectorAll('.stats-numero');

const conteudo = document.querySelector('.principal');

const botaoBusca = document.querySelector('.lupa-img');

var IDnumero;


async function buscaPokemon(nomePokemon) {
    try{
        var pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
        var pokemonConvertido = await pokemon.json();
        console.log(nomePokemon);

        let i=0;

        const pokemonCaractersticas = {
            "nome": pokemonConvertido.name,
            "imagem": pokemonConvertido.sprites.other['official-artwork'].front_default,
            "id": pokemonConvertido.id,
            "tipo": pokemonConvertido.types[0].type.name,
            "habilidade": pokemonConvertido.abilities[0].ability.name,
            "altura" : pokemonConvertido.height/10,
            "peso" : pokemonConvertido.weight/10
        }

     
        
        conteudo.style.cssText =  'padding: 5% 5%';

        conteudo.classList.remove('hide');

        pokedexNome.innerHTML=pokemonCaractersticas.nome;
        pokedexID.innerHTML= "ID: " + pokemonCaractersticas.id;
        pokedexImagem.setAttribute('src', pokemonCaractersticas.imagem);
        pokedexTipo.innerHTML = "Tipo: " + pokemonCaractersticas.tipo;
        pokedexHabilidade.innerHTML = "Habilidade: " + pokemonCaractersticas.habilidade;
        pokedexAltura.innerHTML = "Altura: " + pokemonCaractersticas.altura + " m";
        pokedexPeso.innerHTML = "Peso: " + pokemonCaractersticas.peso + " Kg";
        
        for(i=0;i<6;i++){
            pokedexStats[i].innerHTML =  pokemonConvertido.stats[i].base_stat;
        }
        
        IDnumero = pokemonCaractersticas.id;
        
    }catch(erro){
        conteudo.style.cssText =  'padding: 5% 5%';
        conteudo.classList.remove('hide');

        console.log("Erro");
        pokedexNome.innerHTML="Nome ou ID inválido";
        pokedexID.innerHTML= "";
        pokedexImagem.setAttribute('src', "./assets/img/erro.svg");
        pokedexTipo.innerHTML = ""
    
        pokedexHabilidade.innerHTML = "";
        pokedexAltura.innerHTML = "";
        pokedexPeso.innerHTML = "";

        for(i=0;i<6;i++){
            pokedexStats[i].innerHTML =  "X";
        }

    }
}
botaoBusca.addEventListener('click', () => {
    buscaPokemon(nomePokemon.value.toLowerCase());

    nomePokemon.value='';
});

botoesID.addEventListener('click', (evento) => {
    const botaoSelecionado = evento.target.textContent;

        if(botaoSelecionado =='+'){
            IDnumero  += 1 ;
        }
        if(botaoSelecionado =='-'){
            IDnumero  -= 1 ;
        }
        buscaPokemon(IDnumero);
    })