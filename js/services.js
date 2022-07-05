
const buttonInfo = [...document.querySelectorAll('.button-info')];

const arrayContent = [
    {
        text:'Con más de 10 años de trayectoria, este Grupo ha realizado presentaciones en diferentes festivales de danza y gastronomía en distintas localidades cordobesas como Oktoberfest de Villa General Belgrano y la Fiesta de Colectividades de Alta Gracia, se ha presentado en diversas ciudades del interior del país como la Fiesta Nacional del Inmigrante en Oberá en la provincia de Misiones, La Noche de las Colectividades en Rosario, Santa Fe y la Fiesta Provincial del Inmigrante en Concordia, Entre Ríos; como así también a llevado su espectáculo al exterior del país participando del reconocido festival PolFest en Guaraní das Missões, Brasil.',
        icon:'info',
        confirmButton:'Ok',
        imageUrl: 'media/card1.jpg'
    },
    {
        text:'El dictado del Curso estará a cargo de Víctor Eduardo Bustos, Profesor y Traductor Público egresado de la Universidad Jagellónica de Cracovia, Polonia. Con más de 25 años en la docencia, Víctor se encuentra en continua capacitación en cursos organizados por Stowarzyszenie "Wspólnota Polska" y otras organizaciones especializadas en educación y difusión de la lengua y la cultura polaca. Además, fue convocado en reiteradas oportunidades como representante de Argentina para participar del Consejo de Educación Polonesa organizado por el Ministerio de Educación Nacional de Polonia e integra activamente la Asociación de Maestros de Polaco en Argentina - PONA.',
        icon:'info',
        confirmButton:'Ok',
        imageUrl: 'media/card2.jpeg'
    },
    {
        text:'Si tenés un antepasado nacido en Polonia, podés obtener la Ciudadanía Polaca con la cual podrás acceder luego al Pasaporte Polaco. Este último te otorga derechos y facilidades de estudios, trabajo o residencia en cualquier país de la Unión Europea, de la que Polonia es parte desde 2004.',
        icon:'info',
        confirmButton:'Ok',
        imageUrl: 'media/card3.jpg'
    },
    {
        text:'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ratione, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ratione, delectus dolorum consequatur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ratione, delectus dolorum consequatur.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ratione, delectus dolorum consequatur. adipisicing elit. Distinctio ratione, delectus dolorum consequatur.sit amet consectetur, adipisicing elit. Distinctio ratione, delectus dolorum consequatur.ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ratione, delectus dolorum consequatur.Distinctio ratione, delectus dolorum consequatur.Distinctio ratione, delectus dolorum consequatur. Distinctio ratione, delectus dolorum consequatur.delectus dolorum consequatur',
        confirmButton:'Ok',
        imageUrl: 'https://pbs.twimg.com/media/EVXZcqlXsAAuFfK?format=jpg&name=4096x4096'
    }
];

const infoAlert = (e) =>{
    console.log(e.target.value);
    Swal.fire(arrayContent[e.target.value]);
}

buttonInfo.forEach( (button) => {
    button.addEventListener('click',infoAlert)
})

