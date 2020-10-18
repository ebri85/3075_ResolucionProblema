
const myHtml = window;


myHtml.onload = function(){

   cargaPredeterminados();


}

function cargaPredeterminados(){

    const Pedicure = {
        codigo: '2020-ped-p01',
        descripcion: 'Servicio de Pedicure y rehabilitacion de tu pie',
        costo: 15000,
        acabado: ['Natural', 'Resina', 'Plastico'],
        multicolor: false,
        combo: true,
        imagen: 'img/pedicure.png'  
    }
    
    const Manicure = {
        codigo: '2020-man-m02',
        descripcion: 'Servicio de Manicure y rehabilitacion de tus Manos',
        costo: 10000,
        acabado: ['Natural', 'Resina', 'Plastico'],
        multicolor: true,
        color: true,
        imagen: 'img/manicure.png'  
    }
    
    const Mantenimiento = {
        codigo: '2020-una-u03',
        descripcion: 'Servicio de mantenimiento o diseño de Uñas',
        costo: 20000,
        acabado: ['Natural', 'Resina', 'Plastico'],
        multicolor: true,
        combo: true,
        imagen: 'img/mantenimiento.png' 
    }

}