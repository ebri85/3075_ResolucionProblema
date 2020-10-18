
const myHtml = window;

myHtml.onload = function(){

    
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
    
const servicio1 = document.querySelector(".servicio-1"); 
const s1 = servicio1.parentNode;

    s1.querySelector(".img").src="img/pedicure.png"
    s1.querySelector(".codigo").innerHTML= Pedicure.codigo;
    s1.querySelector(".descripcion").innerHTML= Pedicure.descripcion; 
    s1.querySelector(".acabado").innerHTML= Pedicure.acabado; 
    s1.querySelector(".multicolor").innerHTML= Pedicure.multicolor; 
    s1.querySelector(".cmbo").innerHTML= Pedicure.combo; 



    const servicio2 = document.querySelector(".servicio-2"); 
    const s2 = servicio2.parentNode;
    
        s2.querySelector(".img").src="img/manicure.png"
        s2.querySelector(".codigo").innerHTML= Manicure.codigo;
        s2.querySelector(".descripcion").innerHTML= Manicure.descripcion; 
        s2.querySelector(".acabado").innerHTML= Manicure.acabado; 
        s2.querySelector(".multicolor").innerHTML= Manicure.multicolor; 
        s2.querySelector(".cmbo").innerHTML= Manicure.combo;     

        const servicio3 = document.querySelector(".servicio-3"); 
        const s3 = servicio3.parentNode;
        
        s3.querySelector(".img").src="img/mantenimiento.png"
        s3.querySelector(".codigo").innerHTML= Mantenimiento.codigo;
        s3.querySelector(".descripcion").innerHTML= Mantenimiento.descripcion; 
        s3.querySelector(".acabado").innerHTML= Mantenimiento.acabado; 
        s3.querySelector(".multicolor").innerHTML= Mantenimiento.multicolor; 
        s3.querySelector(".cmbo").innerHTML= Mantenimiento.combo;     
    
    

}





