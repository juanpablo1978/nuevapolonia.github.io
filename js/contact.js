emailjs.init('sdVz1HwpVMP1cfGeX');

const btn = document.getElementById('button');
const form = document.getElementById('form');

const resetForm = () => {
    form.children[0].value = "";
    form.children[1].value = "";
    form.children[2].value = ""; 
}

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'service_0puyocn';
    const templateID = 'template_mm6b5nq';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'ENVIAR MENSAJE';
        Swal.fire({
            text:'Mensaje enviado',
            icon:'success',
            confirmButton:'Ok',
        });
        //acá estoy seguro que la promesa se cumplió y por lo tanto el mail se envió correctamente
        resetForm();
    }, (err) => {
        btn.value = 'ENVIAR';
        alert(JSON.stringify(err));
    });
});

