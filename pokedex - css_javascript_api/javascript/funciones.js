
const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("¡Vamos! " + pokeInput);
    let pokemonBuscado = 'https://pokeapi.co/api/v2/pokemon/' + pokeInput;
    fetch(pokemonBuscado).then((res) => {
        //console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        //Almacenaremos los datos necesarios para mostrar

        let nombrePoke = data.name; // nombre
        let idPoke = data.id; // id del pokemon
        let pokeBasicData = nombrePoke + " / #" + idPoke;// Almacenamos nombre e id
        const tituloPoke = document.getElementById("Nombrepoke");
        tituloPoke.textContent = pokeBasicData;

        let pokeImg = data.sprites.front_default;// Buscamos el sprite del pokemon
        console.log(pokeImg);
        const pokeImage = document.getElementById("pokeImg");//Buscamos donde insertarlo
        pokeImage.src = pokeImg;//Realizamos el cambio de imagen
    })
}