const myhtml = window;



myhtml.onload = function(){
    class Servicio  {
        constructor(codigo,descripcion,costo,acabado,multicolor,combo,imagen){
            this.codigo=codigo,
            this.descripcion = descripcion,
            this.costo = costo,
            this.acabado= acabado,
            this.multicolor = multicolor,
            this.combo = combo,
            this.imagen = imagen
        }
    }


    const codigo = document.querySelector("#codigo");
    const boton = document.querySelector('button');

      
  
        
    let descripcion = document.querySelector("#descripcion");
    let costo = document.querySelector("#costo");
    let acabado = document.querySelector("#acabados");
    let multicolorSi = document.querySelector("#multicolorSi");
    let multicolorNo = document.querySelector("#multicolorNo");
    let comboSi = document.querySelector("#comboSi");
    let comboNo = document.querySelector("#comboNo");
    let imagen = document.querySelector("#imagen");
  


    boton.addEventListener('click', function(e) {

             
        const pat = /[0-9]{4}-[a-zA-Z]{3}-[a-zA-Z]{1}[0-9]{3}/g;

        let str = codigo.value;
            
        let res = pat.test(str);
        if(!res){
            alert("Por favor corriga el formato del codigo del servicio");
        }

    
        let servicio = new Servicio(
            codigo.value,
            descripcion.value,
            costo.value,
            acabado.value,
            multicolor = function() {
                if(multicolorSi===true){
                    return true;
                }else{
                    return false;
                }
            },
            combo =function(){
                if(comboSi.value===true){
                    return true;
                }else{
                    return false;
                }
            },        
            imagen.value)
        
        localStorage.setItem(servicio, JSON.stringify(servicio));
    });
   

}

