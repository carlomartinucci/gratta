var credito_logs = []
var biglietti_grattati_logs = [false]
var euro_grattati_logs = []

function log_credito (credito) {
  credito_logs.push(credito);
  $("#credito").html(credito);
}

function log_biglietti_grattati (id) {
  biglietti_grattati_logs.push(id);
  $("#biglietti-grattati").html(biglietti_grattati);
}

function log_euro_grattati (euro_grattati) {
  euro_grattati_logs.push(euro_grattati);
  $("#euro-grattati").html(euro_grattati);
}