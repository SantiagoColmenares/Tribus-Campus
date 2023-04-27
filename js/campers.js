const URL_API = 'db/campers.json';
const btnData = document.querySelector('#btnData')

btnData.addEventListener("click", getData)

function getData() {
    btnData.style.display = "none"
    fetch(URL_API)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            viewData(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

function viewData(data) {
    const conCampers = document.querySelector('.conCampers')
    const divContenedor = document.querySelector('.contenedor')
    data.forEach(element => {
        const { idTribu, tribu, puntos, campers } = element;
        divContenedor.innerHTML = /* html */ `
        <div class="tribu-item">
            <p>Id: ${idTribu}</p>
            <p>Tribu: ${tribu}</p>
            <p>Puntos: ${puntos}</p>
            <p>Campers:</p>
        </div>
    `
        campers.forEach(camper => {
            const { id, nombre, edad, ingles, rol, img } = camper;
            conCampers.innerHTML += /* html */`
        <div class="camper-item">
            <li>Id Camper: ${camper.id}</li>
            <li>Nombre: ${camper.nombre}</li>
            <li>Edad: ${camper.edad}</li>
            <li>Ingles: ${camper.ingles}</li>
            <li>Rol: ${camper.rol}</li>
            <li>Foto: ${camper.img}</li>
        </div>
    `
        });
    });
}

