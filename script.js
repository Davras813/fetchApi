function printCards(array = []) {
    console.log(array);

    let arrayOfCards = "";
    array.forEach(item => {
        // console.log("#", item);
        //Indicar que en el div vaya concatenando las tarjetas con las tarjetas nuevas.

        //El estudiante debe crear tres o mas paginas web con ejemplos consumiendo API's de uso público.

        let statusColor = item.status === "Alive" ? "success" : "danger"
        arrayOfCards += `
        
        <div class="card" style="width: 30rem;">
            <img src=${item.image} class="card-img-top" alt="...">
            <div class="card-body">
                <p>${item.name} - <span class="text-${statusColor}"> ${item.status} </span> </p>
                <p>${item.species}</p>
                <p>${item.location.name}</p>
            </div>
        </div>

        `
    });
    document.querySelector("#printer").innerHTML = arrayOfCards;
}


function getCharacters() {
    //Devuelve personajes seleccionados
    //Definir la url
    const url = "https://rickandmortyapi.com/api/character/1,183,83"
    //consumir url con fetch
    fetch(url).then(resp => {
        resp.json().then(data => { printCards(data) })
    })
        .catch((err) => console.log(err))
    //Promesa exitosa o error
    //Convertir respuesta a JSON
}

printCards();
getCharacters();