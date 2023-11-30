//MANTENIMIENTO DE CARRITO

function carritoNumElem(){
    let localCar = JSON.parse(localStorage.getItem('carrito'));
    let numCar = localCar.length;
    let totCan = 0;

    const car_btn = document.getElementById("car-btn");    

    if(numCar > 0){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        for (const carItem of carrito) {
            totCan += parseInt(carItem.cant)
        }
        car_btn.innerHTML = totCan;
    }

	if(totCan>0){
		car_btn.style.display= 'inline';
	}
    
}


function carrito_item(){
    // Leer datos del ultimo item a mostrar
    const codi = localStorage.getItem("ITM_CDI");
	const codf = localStorage.getItem("ITM_COD");	
	const descr= localStorage.getItem("ITM_DES");	
	const prec = localStorage.getItem("ITM_PRE");
	const img  = localStorage.getItem("ITM_IMG");

    // Obtiene cantidad ingresada
    const itm_val = document.getElementById("di-itm-valor");
	let cant = parseInt(itm_val.value);    

    // Agregar al carrito
	const numCar = addCarrito(codi,codf,descr,prec,cant,img);

    //Mostrar conteo
    let car_btn = document.getElementById("car-btn");
    car_btn.innerHTML = numCar;
    car_btn.style.display= 'inline';
	
}

function addCarrito(pcodi,pcodf,pdescr,pprecio,pcant,pimagen){
    let newCar = {
        codi : pcodi,
        codf : pcodf,
        descr : pdescr,
        precio : pprecio,
        cant : pcant,
        imagen : pimagen,
    };

    // Verifica si existen datos en localStorage
    let localCar = localStorage.getItem('carrito');
    if(localCar==null){
        carrito = [];
    }else{
        carrito = JSON.parse(localCar);
    }

    // Verifica si el producto ya existe    
    let exiCar = false;    
    let totCan = 0;
    let totItm = 0;

    for (const carItem of carrito) {
        if(carItem.codi==pcodi){
            totItm = parseInt(carItem.cant) + parseInt(pcant);
            carItem.cant = totItm.toString();
            exiCar = true;
        }
        totCan += parseInt(carItem.cant)
    }
 
    // Grabar carrito
    if(exiCar==false){
        carrito.push(newCar);
        totCan += parseInt(pcant);        
    }
    localStorage.setItem('carrito',JSON.stringify(carrito));

    return totCan;
}


function toogleCarrito(){

    mostrarCarrito();

    const menu = document.getElementById("menu")
    menu.classList.toggle("menu--is-open")

    const overlay = document.getElementById("overlay")
    overlay.classList.toggle("overlay--is-active")

}

function leerCarrito(){
    let localCar = localStorage.getItem('carrito');
    if(localCar==null){
        carrito = [];
    }else{
        carrito = JSON.parse(localCar);
    }
    return carrito;
}


function mostrarCarrito(){
	let carrito = leerCarrito();
	let total = 0;

    const itm_tot = document.getElementById("com-tot");	
	const compras_ITEM = document.getElementById('compras-detcom');

    if(carrito.length!=0){
        for (const carItem of carrito) {
            const compra_html =	`<div class="compras-detcom">
                                    <img src="img/${carItem.imagen}" alt="">
                                        <div>
                                            <p>${carItem.codf}</p>
                                            <div class="com-pre">
                                                <p>${carItem.cant} x</p>
                                            <span>${carItem.precio}</span>
                                        </div>                                            
                                        </div>
                                 </div>`;

            compras_ITEM.innerHTML += compra_html;
    
            total = total + (parseFloat(carItem.cant,2) * parseFloat(carItem.precio,2));
        }
    
        itm_tot.innerHTML = total.toFixed(2);
    }else{
        const compra_html =	`<div class="compras-detcom">
                                    <div>
                                        <p class="car-msg">No hay productos en el carrito</p>
                                    </div>
                            </div>`;
        compras_ITEM.innerHTML += compra_html;
    }

}

