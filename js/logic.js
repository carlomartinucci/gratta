var credito = 600;
var biglietti_grattati = 0;
var euro_grattati = 0;

function set_credito(delta) {
	credito += delta
	$("#credito").html(credito);
	$("#biglietti-grattati").html(biglietti_grattati);
	$("#euro-grattati").html(euro_grattati);
}

function set_output(output) {
  if ($("#output").html() == "Sei pronto a perdere tutti i tuoi euro?") {
		$("#output").html(output);
	} else {
		$("#output").prepend(output+"<br/>");
	}
}

function gratta(biglietto) {
	//console.log("lotto: " + biglietto.lotto);
	var estratto = Math.floor(Math.random()*biglietto.lotto);
	biglietti_grattati ++;
	euro_grattati += biglietto.costo;
	for (var vn in biglietto.tipi_di_vincita) {
	    var vincita = biglietto.tipi_di_vincita[vn][0];
	    var numero = biglietto.tipi_di_vincita[vn][1];
	    estratto -= numero;
	    if (estratto < 0) {
	    	return parseInt(vincita)
	    }
	}
	return 0
}

function biglietti_grattabili(biglietto, credito) {
	var costo = parseInt(biglietto.costo);
	credito = parseInt(credito);
	return parseInt(credito/costo)
}