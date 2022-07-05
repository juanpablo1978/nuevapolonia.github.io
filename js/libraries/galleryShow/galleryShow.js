

export const showGallery = (arrayGallery, id) => { 
    //variables
    let photoId = id;
    let photo = arrayGallery.find( el => el.id == photoId);
    let photoIndex = arrayGallery.findIndex( el => el.id == photoId );
    const body = document.querySelector('body');  
    body.style.overflow = 'hidden';
    const galleryContainer =  document.createElement('section');
    galleryContainer.classList.add('gallery--galleryShow');
    galleryContainer.innerHTML = `
        <div class="gallery__bg--galleryShow"></div>
    `;
    body.appendChild(galleryContainer);

    const carrusel = document.createElement('div');
    carrusel.classList.add('carrusel-container');
    galleryContainer.appendChild(carrusel);
    carrusel.innerHTML = `
        <button class="button-back--galleryShow"></button>
        <button class="button-forward--galleryShow"></button>
    `;

    const photoContainer = document.createElement('article');
    photoContainer.classList.add('photo-container');
    carrusel.appendChild(photoContainer);

    //TODO: crear un botón para cerrar la galería (tiene que ser hijo del galleryContainer)
    //luego añadir un evento a ese botón y ejecutar la función closeGallery;

    //funciones
    const photoPrint = (photo) =>{
        
        const imgPhoto = document.createElement('img');
        imgPhoto.classList.add('photo-container__img');
        imgPhoto.src = photo.img;

        const photoCount = document.createElement('span');
        photoCount.classList.add('photo-container__count');
        photoCount.innerHTML = `${photoIndex + 1}/${arrayGallery.length}`

        photoContainer.appendChild(photoCount);
        photoContainer.appendChild(imgPhoto);
    }

    const removeChildrem = (node) => {
        //El while ejecutara el removeChild tantas veces como hijos tenga el contenedor
        while(node.lastChild){
            node.removeChild( node.lastChild )
        }
    };

    const closeGallery = () => {
        console.log(body.children);
        body.removeChild(body.children[10]);
        body.style.overflow = 'auto';
    }
    
    //eventos
    carrusel.children[0].addEventListener('click',()=>{
        photoIndex =  photoIndex === 0 ? arrayGallery.length - 1 : photoIndex -1 ;  
        removeChildrem(photoContainer);
        photoPrint(arrayGallery[photoIndex]);

    });
    carrusel.children[1].addEventListener('click',()=>{
        photoIndex =  photoIndex === arrayGallery.length-1 ? 0 : photoIndex + 1 ;  
        removeChildrem(photoContainer);
        photoPrint(arrayGallery[photoIndex]);

    });

    galleryContainer.children[0].addEventListener('click',closeGallery);
    
    
    //ejecuciones inmediatas
    console.log(arrayGallery);
    photoPrint(photo);
    console.log(galleryContainer.children[0]);
}


//se debería en el script que se requiera



