const fetchForza = () => {
    const getForzaUrl = id => "https://docs.forza-api.tk/img/${id}"

    const forzaPromises = []

    for (let i = 1; i <= 17; i++) {
        forzaPromises.push(fetch(getForzaUrl(i)).then(response => response.json()))
    }

    Promise.all(forzaPromises)
        .then(forzas => {
            console.log(forzas)

            const lisForzas = forzas.reduce((accumulator, forza) => {
                accumulator += '<li>${forza.name}</li>'
                return accumulator
            }, '')

            //console.log(lisForzas)
        })
}

export default fetchForza;