$(document).ready(function () {
  update_credito(0);
  update_euro_grattati(0);
  prevent_empty_output();
  set_buttons();
  set_info_tickets();

  /*$('body').on("click", ".gratta-enne", function (e) {
    gratta_questo_n_volte($(this).data("id"), $(this).data("enne"));
  });*/
  $('body').on("click", "#gratta-ora", function (e) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Gratta',
      eventAction: 'gratta'
    });
    gratta_questo_n_volte($(this).data("id"), $(this).data("enne"));
  });
  $('body').on("click", ".set-gratta", function (e) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Gratta',
      eventAction: 'setta'
    });
    var id = $(this).data("id");
    $("#gratta-ora").data("id", id);
    var nome_biglietto = biglietti[id].nome;
    
    $("#gratta-ora").html("GRATTA UN " + nome_biglietto);
  });
});

function gratta_questo_n_volte(id, n) {
  var biglietto = biglietti[id];
  console.log(biglietto)
  if (credito >= parseInt(biglietto.costo)*parseInt(n)) {
    console.log(1)
    for (var i=0;i<n;i++) {
      var risultato = gratta(biglietto);
      update_credito(-parseInt(biglietto.costo) + risultato);
      set_output("Hai grattato un " + biglietto.nome + " per " + biglietto.costo +"€, hai vinto " + risultato + "€.");
    }
    set_buttons();
  } else {
    no_money_output();
  }
}