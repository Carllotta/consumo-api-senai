async function example(){
    try{
        const url = "http://localhost:5000/api/filmes"
        const request = await fetch(url)
        const response = await request.json()
        console.log(response)
    } catch(error){
        console.log(error)
    }
}