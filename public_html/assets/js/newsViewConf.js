
let URLsearch = window.location.search.substring(4,6)
const tituloNew = document.getElementById("titleNew")
const fechaNew = document.getElementById("fechaNew")
const bannerNew = document.getElementById("fotoContent")
const bodyNew = document.getElementById("bodyNew")





console.log(noticias[idNew].titulo)

const cargaContenido = () =>{
    tituloNew.textContent = "hola"
}

//Meta
document.querySelector('meta[name="description"]').setAttribute("content",noticias[URLsearch].metaDes );
document.querySelector('meta[name="keywords"]').setAttribute("content",noticias[URLsearch].metaKeys );

tituloNew.textContent = noticias.reverse()[URLsearch].titulo
fechaNew.textContent = noticias[URLsearch].fecha
bannerNew.innerHTML = `<img id="bannerNew" src="${noticias[URLsearch].img}" alt="">`
bodyNew.textContent = noticias[URLsearch].cuerpo


