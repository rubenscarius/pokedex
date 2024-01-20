const pokemonStats = document.getElementById("pokemonStats");

let id = localStorage.getItem('id');
id = parseInt(id);

function loadPokemonsStats(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return fetch(url).then(response => response.json())
        .then((jsonBody) => {
            return jsonBody
        })


}

loadPokemonsStats(id)
    .then(jsonData => {
        const pokemonObject = jsonData;

        pokemonStats.innerHTML =
            `
            <h2 class="pokemon-name">${pokemonObject.name}</h2>
            <span class="id">#${pokemonObject.id}</span>
            <img src="${pokemonObject.sprites.other["official-artwork"].front_default}">

            <table class="table-stats">
                <tr>
                    <th>${pokemonObject.stats[0].stat.name}</th>
                    <td>${pokemonObject.stats[0].base_stat}</td>
                </tr>
                <tr>
                    <th>${pokemonObject.stats[1].stat.name}</th>
                    <td>${pokemonObject.stats[1].base_stat}</td>
                </tr>
                <tr>
                    <th>${pokemonObject.stats[2].stat.name}</th>
                    <td>${pokemonObject.stats[2].base_stat}</td>
                </tr>
                <tr>
                    <th>${pokemonObject.stats[3].stat.name}</th>
                    <td>${pokemonObject.stats[3].base_stat}</td>
                </tr>
                <tr>
                    <th>${pokemonObject.stats[4].stat.name}</th>
                    <td>${pokemonObject.stats[4].base_stat}</td>
                </tr>
                <tr>
                    <th>${pokemonObject.stats[5].stat.name}</th>
                    <td>${pokemonObject.stats[5].base_stat}</td>
                </tr>
            </table>
        `
    })