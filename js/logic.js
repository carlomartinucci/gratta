function update_credito (delta) {
	localStorage.credito = Number(localStorage.credito) + delta
	log_credito(localStorage.credito);
}

function update_biglietti_grattati (id) {
	localStorage.biglietti_grattati = Number(localStorage.biglietti_grattati) + 1
	log_biglietti_grattati(id);
}


function update_euro_grattati (delta) {
	localStorage.euro_grattati = Number(localStorage.euro_grattati) + delta
	log_euro_grattati(localStorage.euro_grattati);
}

function update_ritorno_medio (vincita) {
	localStorage.euro_vinti = Number(localStorage.euro_vinti) + vincita;
	var ritorno_medio = Number(localStorage.euro_vinti)/Number(localStorage.euro_grattati);
	log_ritorno_medio(ritorno_medio);
}

function set_output(output) {
  if ($(".output").html() == "Sei pronto a perdere tutti i tuoi euro?") {
		$(".output").html(output);
	} else {
		$(".output").prepend(output+"<br/>");
	}
}

function gratta(biglietto) {
	//console.log("lotto: " + biglietto.lotto);
	var estratto = Math.floor(Math.random()*biglietto.lotto);
	update_biglietti_grattati(biglietto.id);
	update_euro_grattati(biglietto.costo);
	for (var vn in biglietto.tipi_di_vincita) {
	    var vincita = parseInt(biglietto.tipi_di_vincita[vn][0]);
	    var numero = biglietto.tipi_di_vincita[vn][1];
	    estratto -= numero;
	    if (estratto < 0) {
	    	update_ritorno_medio(vincita);
	    	return vincita
	    }
	}
	update_ritorno_medio(0);
	return 0
}

function biglietti_grattabili(biglietto, credito) {
	var costo = parseInt(biglietto.costo);
	credito = parseInt(credito);
	return parseInt(credito/costo)
}