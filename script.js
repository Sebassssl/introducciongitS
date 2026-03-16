// script.js
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el nombre, correo y el auto seleccionado
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const car = document.getElementById('car').value;

    // Mostrar información del vehículo seleccionado
    const carInfo = document.getElementById('carInfo');
    const infoParagraph = document.getElementById('info');
    const carImage = document.getElementById('carImage');

    let carDetails = '';
    let imageUrl = '';

    switch (car) {
        case 'auto1':
            carDetails = 'Toyota Corolla: Un sedán fiable y económico con un motor de 1.8L que ofrece un rendimiento excepcional en combustible y una experiencia de conducción cómoda.';
            imageUrl = 'toyota-corolla.jpg'; // Asegúrate de tener esta imagen en la carpeta
            break;
        case 'auto2':
            carDetails = 'Ford Mustang: Un icónico coche deportivo con un motor V8 de 5.0L que ofrece una gran potencia y una experiencia de conducción emocionante.';
            imageUrl = 'ford-mustang.jpg'; // Asegúrate de tener esta imagen en la carpeta
            break;
        case 'auto3':
            carDetails = 'BMW X5: Un SUV de lujo con un motor de 3.0L turboalimentado que combina potencia, confort y tecnología avanzada en un solo paquete.';
            imageUrl = 'bmw-x5.jpg'; // Asegúrate de tener esta imagen en la carpeta
            break;
        default:
            carDetails = 'Por favor, selecciona un auto.';
            imageUrl = '';
    }

    // Verifica la URL de la imagen
    console.log('Imagen seleccionada: ' + imageUrl);

    // Mostrar el nombre, correo y la información del vehículo
    infoParagraph.innerHTML = `
        <strong>Hola, ${name} (${email})</strong>.<br>
        Has seleccionado el vehículo: <strong>${carDetails}</strong>
    `;

    // Mostrar la imagen del vehículo seleccionado
    if (imageUrl) {
        carImage.src = imageUrl;
        carImage.alt = carDetails;
    } else {
        carImage.src = '';
        carImage.alt = '';
    }

    // Mostrar la sección de información
    carInfo.style.display = 'block';
});