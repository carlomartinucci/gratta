
function prevent_empty_output() {
	if ($("#output").html() == "") {
		$("#output").html("Sei pronto a perdere tutti i tuoi euro?");
	}
}

function no_money_output() {
	if ($("#output").html().substr(0,17) != "[HAI PERSO TUTTO]") {
		$("#output").prepend("[HAI PERSO TUTTO] Soldi esauriti... (fai un refresh della pagina ;) )<br/>");
	}
}


function set_buttons() {
	total_content = ''
	biglietti.forEach(function (biglietto, i, a) {
		var content = '<div class="btn-group btn-group-justified" role="group">'
		var grattabili = biglietti_grattabili(biglietto, credito);

		if (grattabili <= 1) {
			content  += '<div class="btn-group" role="group" style="width: 75%">'
		} else {
			content  += '<div class="btn-group" role="group" style="width: 50%">'
		}
		content    += '<button type="button" class="btn gratta-info" data-id=' + i + '>'
		content    += "<span class='nome-biglietto'>"
		content    += biglietto.nome
		content    += "</span> "
		content    += '</button>'
		content    += '</div>'

		content    += '<div class="btn-group" role="group" style="width: 25%">'
		if (grattabili == 0) {
			content  += '<button type="button" class="btn btn-info disabled" data-id=' + i + '>'
		} else {
			content  += '<button type="button" class="btn btn-info gratta-enne" data-id=' + i + ' data-enne=' + 1 + '>'
		}
		content    += "<span class='costo-biglietto badge'>"
		content    += "1 per " + biglietto.costo
		content    += " €</span>"
		content    += '</button>'
		content    += '</div>'

		if (grattabili > 1) {
			content  += '<div class="btn-group" role="group" style="width: 25%">'
			content  += '<button type="button" class="btn btn-danger gratta-enne" data-id=' + i + ' data-enne=' + grattabili + '>'
			content  += "<span class='costo-biglietto badge'>"
			content  += grattabili + " per " + biglietto.costo * grattabili
			content  += " €</span>"
			content  += '</button>'
			content  += '</div>'
		}

		content    += '</div>'
		content    += '<div style="height: 2px;"></div>'
		total_content += content
	})
	$('.pulsanti').html(total_content);
}
