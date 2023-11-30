

function cargaDetalle(){

    // const xitm_ind = localStorage.getItem("ITM_IND");
	const xitm_cod = localStorage.getItem("ITM_COD");
	const xitm_pre = localStorage.getItem("ITM_PRE");
	const xitm_mca = localStorage.getItem("ITM_MCA");
	const xitm_stk = localStorage.getItem("ITM_STK");
	const xitm_cdi = localStorage.getItem("ITM_CDI");
	const xitm_fam = localStorage.getItem("ITM_FAM");
    const xitm_img = localStorage.getItem("ITM_IMG");

    const itm_cod = document.getElementById("di-itm-cod");
    const itm_nav = document.getElementById("di-itm-nav");
    const itm_pre = document.getElementById("di-itm-pre");
    const itm_mca = document.getElementById("di-itm-mca");	
    const itm_stk = document.getElementById("di-itm-stk");
    const itm_cdi = document.getElementById("di-itm-cdi");
    const itm_fam = document.getElementById("di-itm-fam");
    const itm_img = document.getElementById("di-itm-img");
        
    
    itm_nav.innerHTML = 'inicio / '+ xitm_fam +'/'+ xitm_cod;	
    itm_cod.innerHTML = xitm_cod;
    itm_pre.innerHTML = xitm_pre;
    itm_mca.innerHTML = xitm_mca;
    itm_stk.innerHTML = xitm_stk;
    itm_cdi.innerHTML = xitm_cdi;
    itm_fam.innerHTML = xitm_fam;
    itm_img.innerHTML = `<img class="itm-imagen" id="di-itm-img" src="img/${xitm_img}" alt="Producto">`;
    
	//Verifica carrito
	carritoNumElem();

}



//==================================================
// CARRITO

function decrease() {
    const itm_can = document.getElementById("di-itm-cant");
    const itm_val = document.getElementById("di-itm-valor");    
    let cant = parseInt(itm_val.value);

	if(cant > 1) {
		cant--;
		itm_can.innerHTML = `<input id="di-itm-valor" type="number" value="${cant}" disabled/>`
        localStorage.setItem("ITM_CAN",value);
	}
}

function increase() {
	const itm_can = document.getElementById("di-itm-cant");
    const itm_val = document.getElementById("di-itm-valor");
	let cant = parseInt(itm_val.value);

	if(cant < 10) {
		cant ++;
		itm_can.innerHTML = `<input id="di-itm-valor" type="number" value="${cant}" disabled/>`
        localStorage.setItem("ITM_CAN",value);        
	}
}

