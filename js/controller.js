$(document).ready(function () {
  set_credito(0);
  prevent_empty_output();
  set_buttons();

  $('body').on("click", ".gratta-uno", function (e) {
    gratta_questo($(this).data("id"));
  });

  $('body').on("click", ".gratta-enne", function (e) {
    gratta_questo_n_volte($(this).data("id"), $(this).data("enne"));
  });
});

function gratta_questo(id) {
  var biglietto = biglietti[id];
  if (credito >= parseInt(biglietto.costo)) {
    var risultato = gratta(biglietto);
    set_credito(-parseInt(biglietto.costo) + risultato);
    set_output("Hai speso "+ biglietto.costo +", hai vinto "+risultato);
    set_buttons();
  } else {
    no_money_output();
  }
}

function gratta_questo_n_volte(id, n) {
  var biglietto = biglietti[id];
  console.log(biglietto)
  if (credito >= parseInt(biglietto.costo)*parseInt(n)) {
    console.log(1)
    for (var i=0;i<n;i++) {
      var risultato = gratta(biglietto);
      set_credito(-parseInt(biglietto.costo) + risultato);
      set_output("Hai grattato un " + biglietto.nome + " per " + biglietto.costo +"€, hai vinto " + risultato + "€.");
    }
    set_buttons();
  } else {
    no_money_output();
  }
}