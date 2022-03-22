
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
        let pokeBasicData = nombrePoke + " #" + idPoke;// Almacenamos nombre e id como gustemos
        const tituloPoke = document.getElementById("Nombrepoke");//Buscamos donde poner ambos
        tituloPoke.textContent = pokeBasicData;//Pasamos el resultado donde se observa

        let pokeImg = data.sprites.front_default;// Buscamos el sprite del pokemon
        console.log(pokeImg);
        const pokeImage = document.getElementById("pokeImg");//Buscamos donde insertarlo
        pokeImage.src = pokeImg;//Realizamos el cambio de imagen

        let statsPoke;//Variable que se turnara las estadisticas
        for(let i=0; i<=5; i++){//Realizamos un for para los stats
            //console.log(data.stats[0].base_stat); //Prueba para la busqueda en array
            statsPoke = data.stats[i].base_stat; //Se almacena el stat en turno
            let pokeHabilidades = document.getElementById("Stat"+i);//Se busca su correspondiente lugar
            pokeHabilidades.textContent = statsPoke;//Se almacena
        }//Termina el for

        let typesPoke = data.types;//Buscamos los tipos en caso de ser más de uno
        console.log(typesPoke);
        let tiposPoke = document.getElementById("tipos");//buscamos donde pasarlo
        tiposPoke.textContent='';//mantenemos en blanco para la operación siguiente
        for(i in typesPoke){//Al desconocer la cantidad se utiliza un for in
            tiposPoke.textContent += typesPoke[i].type.name + " ";//Autosumamos el resultado en caso de ser más de uno y se almacena
        }

        //Aplicaremos lo mismo para los movimientos
        let movesPoke = data.moves;//Buscamos los movimientos en caso de ser más de uno
        console.log(movesPoke);
        let moviminetosPoke = document.getElementById("movePoke");//buscamos donde pasarlo
        moviminetosPoke.textContent='';//mantenemos en blanco para la operación siguiente
        for(i in movesPoke){//Al desconocer la cantidad se utiliza un for in
            moviminetosPoke.textContent += movesPoke[i].move.name + ", ";//Autosumamos el resultado en caso de ser más de uno y se almacena
        }
    })
}