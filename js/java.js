var app = {};   
let total = 0;
let indItm=0;

function miCallback(datos){
	app.items=datos;

    const contenido_ITEM = document.getElementById('cont-itm');
	const nitems = app.items.length;

	for(i=0;i<nitems;i++){

		if(app.items[i].estado!="1"){
			const dato_html =`<div class="col-md-4 col-sm-6">
								<div class="itm-det p-4">
								  <a href="det_item.html" onclick="detalle_item(${i})">
										<img class="imagen"  src="img/${app.items[i].imagen}" alt="articulo">
										<h6>
											<p id="itm-cod">${app.items[i].codf}</p>
										</h6>
										<div>
											<p id="itm-fam">${app.items[i].familia}</p>
										</div>
										<span class="precio" id="itm-pre">${app.items[i].precio}</span>
									</a>	
									<div>
										<input class="rounded-pill carrito" type="button" value="Agregar al carrito" onclick="carrito_item1(${i})">
									</div>
								</div>
								</div>`
	
			 contenido_ITEM.innerHTML += dato_html;
		}
	}

}


// Detalle de items

function detalle_item(indice){
	// Agrega al localStorage los datos de un item consultado

	const itm_ind = indice;
	const itm_cod =	app.items[indice].codf;
	const itm_pre = app.items[indice].precio;
	const itm_des = app.items[indice].descr;
	const itm_mca = app.items[indice].marc;
	const itm_stk = app.items[indice].stoc;
	const itm_cdi = app.items[indice].codi;
	const itm_fam = app.items[indice].familia;
	const itm_img = app.items[indice].imagen;

	localStorage.setItem("ITM_IND",itm_ind);
	localStorage.setItem("ITM_COD",itm_cod);
	localStorage.setItem("ITM_PRE",itm_pre);
	localStorage.setItem("ITM_DES",itm_des);	
	localStorage.setItem("ITM_MCA",itm_mca);
	localStorage.setItem("ITM_STK",itm_stk);
	localStorage.setItem("ITM_CDI",itm_cdi);
	localStorage.setItem("ITM_FAM",itm_fam);
	localStorage.setItem("ITM_IMG",itm_img);
	localStorage.setItem("ITM_CAN",1);
}


function busquedaItems(){
    event.preventDefault();	

	const itm_busq = document.getElementById("bus-itm").value;
	const contenido_ITEM = document.getElementById('cont-itm');
	const nelem = app.items.length;
	const encontrados=0;

	contenido_ITEM.innerHTML = "";	

	for(i=0;i<nelem;i++){

		if (app.items[i].codf.includes(itm_busq)){
			const dato_html =`<div class="col-md-4 col-sm-6">
								<div class="itm-det p-4">
								  <a href="det_item.html" onclick="detalle_item(${i})">
										<img class="imagen"  src="img/${app.items[i].imagen}" alt="articulo">
										<h6>
											<p id="itm-cod">${app.items[i].codf}</p>
										</h6>
										<div>
											<p id="itm-fam">${app.items[i].familia}</p>
										</div>
										<span class="precio" id="itm-pre">${app.items[i].precio}</span>
									</a>	
									<div>
										<input class="rounded-pill carrito" type="button" value="Agregar al carrito" onclick="carrito_item1(${app.items[i].codi})">
									</div>
								</div>
								</div>`
	
			contenido_ITEM.innerHTML += dato_html;
			
		}
	}

	// Tengo que volver a pasar para el conteo por que la variable no hace el coteo
	for(i=0;i<nelem;i++){
		if (app.items[i].codf.includes(itm_busq)){
			encontrados++;
		}
	}

	if(encontrados==0){
		const contenido_MSG = document.getElementById('cont-msg');
		contenido_MSG.style.display ='block';
		contenido_MSG.innerText = 'No se encontraron productos que concuerden con la selección.';
	}
		
}

function verificaCarrito(){
	//Verifica carrito
	carritoNumElem();
}

function carrito_item1(iditm){
    // Leer datos del ultimo item a mostrar

    const codi = app.items[iditm].codi;
	const codf = app.items[iditm].codf;
	const descr= app.items[iditm].descr;
	const prec = app.items[iditm].precio;
	const cant = 1;
	const img  = app.items[iditm].imagen;
	
	const numCar = addCarrito(codi,codf,descr,prec,cant,img);

    //Mostrar conteo
    const car_btn = document.getElementById("car-btn");
    car_btn.innerHTML = numCar;

	if(numCar>0){
		car_btn.style.display= 'inline';
	}

}

