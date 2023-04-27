const URL_API = 'db/campers.json';
const btnData = document.querySelector('#btnData')

btnData.addEventListener("click", getData)

function getData(){
    fetch(URL_API)
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        viewData(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

function viewData(data){
    const divContenedor = document.querySelector('#contenedor')
    data.forEach(element => {
        const {idTribu,tribu,puntos,campers} = element;
        divContenedor.innerHTML = /* html */ `
        <p>Id: ${idTribu}</p>
        <p>Tribu: ${tribu}</p>
        <p>Puntos: ${puntos}</p>
    `

    data.campers.forEach(camper => {
        const {id,nombre,edad,ingles,rol,img} = camper;
        console.log(id);
        // Hacer algo con cada camper...
    });
    });
  
    
}

