

/*---------- Menú principal-----------*/

//Declaro las variables hamburguer y menu
//selecciono las clases hamburger y menu-navegacion
import { arrayGallery } from "../data/gallery.js";
import { showGallery } from "./libraries/galleryShow/galleryShow.js";
// import { showModal } from "./lightbox.js"; (aún no implementado)

const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

//Al elemento hamburguer le agrego el evento click y declaro una funcion
//selecciono "spread" con toggle, para que ésta aparezca y desaparezca con el click
//de esta forma aparece y desaparece el menu

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread") 
})                                  

//Al elemento window le agregom el evento click y declaro una funcion con parametro e.
//utilizo un condicional para indicar cuándo debe cerrrarse el menu, dependiendo de dónde se hace el click.

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer){

        menu.classList.toggle("spread")
    }
})




/*------ Menu Gallery ------*/

//Declaro mis variables
const categoryButton = document.querySelectorAll('.gallery-menu__item');
const galleryContainer = document.querySelector('.contenedor-galeria');
const localStorage = window.localStorage;
let arrayFavorites = []; //es let porque va a ser sobreescrito constantemente

//Declaro mis funciones
const removePhotos = () => {
    //El while ejecutara el removeChild tantas veces como hijos tenga el contenedor
    while(galleryContainer.lastChild){
        galleryContainer.removeChild( galleryContainer.lastChild )
    }
}

//Esta función selecciona el botón de la categoría en la galería y para ello, antes retira la clase que resalta en negro el botón, y le agrega dicha clase solo al botón clickeado
const selectCategory = (currentButton) => {
    categoryButton.forEach(button => {
        button.classList.remove('gallery-menu__item--selected');
    });
    currentButton.classList.add('gallery-menu__item--selected');
}

//se ejecuta en el evento click del corazón (favoritos) para pintar de rojo o pintar de gris el corazón y además agrerá el favorito al localStorage
const favoriteSelect = (nodo, photo) => {
    console.log(nodo,photo);
    if(nodo.classList.toggle('favorite-icon--active')){
        //El corazón se pinta de rojo
        arrayFavorites.push(photo);
        localStorage.setItem('favorites',JSON.stringify(arrayFavorites));

    }else{
        //El corazón se pinta de gris
        arrayFavorites = arrayFavorites.filter( favorito => favorito.id !== photo.id );
        localStorage.setItem('favorites',JSON.stringify(arrayFavorites));
    }
}

//Esta función devuelve un true si el id de la foto ingresada por parámetro (photoIn) es igual a uno de los elementos que tiene el arrayFavorites. En caso contrario, devuelve un false.
const photoInStorage=(photoIn) => arrayFavorites.some( photo => photo.id === photoIn.id );

const printGallery = (categorySelected) => {
    //remover las fotos de la categoría anterior:
    removePhotos();
    //1.- filtrar por categoría:
    const result = arrayGallery.filter( photo => photo.category == categorySelected );
    result.forEach( el => {
        const newImage = document.createElement('div'); //<div> </div>
        newImage.setAttribute('data-src',el.img);
        newImage.classList.add('image-gallery-container');
        newImage.innerHTML = `
            <img src="${el.img}" alt="${el.description}" class="img-galeria">
            <div class="${ photoInStorage(el) ? 'favorite-icon favorite-icon--active' : 'favorite-icon' }">
                <i class='bx bxs-heart'></i>
            </div>    
        `;
        galleryContainer.appendChild(newImage);
        newImage.childNodes[1].addEventListener('click',()=>{
            console.log(el.id);
            showGallery(result, el.id);
        });
        newImage.childNodes[3].addEventListener('click',(e)=>{
            favoriteSelect(e.target.parentElement,el); 
        });
        //showGallery(arrayGallery, 6);
    });

}


//Declaro mis eventos
categoryButton.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        printGallery(e.target.innerHTML)
        selectCategory(button);
    });
});


//Ejecuciones inmediatas (funciones o bloques de código que se ejecutarán a penas se cargue la página)

//corroboramos cuando inicia la página si es que ya existen favoritos en el localStorage
//Si existen favoritos, entonces los seteo (ingreso los datos) en el array "arrayFavorites"
if( localStorage.getItem('favorites') ){
    arrayFavorites = JSON.parse(localStorage.getItem('favorites'));
}

printGallery('show 10 Años');