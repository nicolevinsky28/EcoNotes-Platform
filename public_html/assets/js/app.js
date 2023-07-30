


//news.html

let idNew = localStorage.getItem("noticia")
let newDiv 

const boton = document.getElementsByClassName("leer")
function leernoticia(id){
    idNew = id
    localStorage.setItem("noticia", id)
}


let apiNews = []
let APInew
let divNews = document.getElementsByClassName("newContainer")

/*fetch("https://newsdata.io/api/1/news?apikey=pub_9131c9f8b2774ac6b5bef29522562aaf31ca&q=cambio%20climatico&language=es")
   .then((respuesta) =>{
    return respuesta.json()
   }) // de esta forma accedemos a la estructura de la api, para ingresar al contenido hacemos otro then
   .then((data) =>{
    console.log(data)
    apiNews.unshift(data)
    APInew = data.results
    

    APInew[0].results.forEach((post) =>{
        alert(post.title)
    })

    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = "aaa"
      

    return APInew = data.results
    
   })

   console.log(apiNews)
   console.log(APInew)
   apiNews.forEach(element => {
    
   });*/


   const obtenerNoticias=async() =>{
    let categoria = "science"
    const apikey = "1e13f60ad5394be5b4d3c2c44348fb25"
    const URL = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apikey=${apikey}`


    const respuesta=await fetch(URL)
    const resultado=await respuesta.json()
    console.log(resultado)

    let noticiasApi = resultado.articles
    let listadoNoticiasHTML = ``
    document.querySelector(".noticias").innerHTML = ``
    noticiasApi.map(noticia=>{
        const{urlToImage, url, title, description, source} = noticia
        listadoNoticiasHTML+=`
        <div class="newContainer">
        <img src="${urlToImage}" width="200" height="200" alt="Imagen relacionada al titulo">
        <div class="newContent">
            <h2 class="titleNew">${title}</h2>
            <p class="newIntro">${description}</p>
            <ul class="botonera">
                <li><a id="0" href="${url}" >Leer Completo</a></li>
                <li class="fecha">17/2/22</li>
            </ul>
        </div>
    </div>`

    let divNews = document.querySelector(".noticias")
    divNews.innerHTML = listadoNoticiasHTML

    })
}
   
let repeticionFuncion = 0
let noticiasR = noticias.reverse()
    if(repeticionFuncion = 0){
    const obtenerNoticiasEco = () =>{
    document.getElementById("noticias").innerHTML = ``
    noticiasR.forEach( (noticia) =>{
        let noticiaview = document.querySelector(".noticias")
        noticiaview.innerHTML +=`
        <div class="newContainer">
        <img src="${noticia.miniatura}" width="200" height="200" alt="Imagen relacionada al titulo">
        <div class="newContent">
            <h2 class="titleNew">${noticia.titulo}</h2>
            <p class="newIntro">${noticia.metaDes}</p>
            <ul class="botonera">
                <li><a id="0 onClick="leernoticia('${noticia.id}')" href="subpaginas/newsView.html?id=${noticia.id}" >Leer Completo</a></li>
                <li class="fecha">${noticia.fecha}</li>
            </ul>
        </div>
    </div>`
    })
   }}
   obtenerNoticiasEco()
   