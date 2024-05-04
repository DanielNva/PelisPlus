const form = document.querySelector('form');
const container = document.querySelector('.contenido')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let query = form.querySelector('input').value;
    Peli(query)
})

async function Peli(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const peliculas = await req.json() 
    console.log(peliculas);
    mostrarPelicula(peliculas);
}

function mostrarPelicula(peliculas){
    for(let pelicula of  peliculas){
        let src =  pelicula.show.image.medium;

        const img = document.createElement("img");
        img.src= src;
        container.appendChild(img);
    }
}