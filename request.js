var apikey = {
    key: 'd684edf0-86fe-4918-a0c1-7fcdf09c1b74'
}

fetch('https://pro.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY+'+ apikey.key)
.then((response) => {
    if(!response.ok) throw new Error('erro ao executar a requisição, status ' + response.status)
    return response.json()
})
.then((api) => {
    console.log(api)

    var texto = ""
    for(let i = 0 ; i < 10; i++){
        console.log(api)

        texto = texto + `
        <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60"
            <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            </div>
        </div>
        `
        document.getElementById("coins").innerHTML = texto
    }
})
.catch((error) => {
    console.error(error.message)
})