function update_credito (delta) {
	credito += delta;
	log_credito(credito);
}

function update_biglietti_grattati (id) {
	biglietti_grattati ++
	log_biglietti_grattati(id);
}


function update_euro_grattati (delta) {
	euro_grattati += delta
	log_euro_grattati(euro_grattati);
}

function update_ritorno_medio (vincita) {
	euro_vinti += vincita;
	ritorno_medio = euro_vinti/euro_grattati;
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