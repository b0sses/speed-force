var jugadores=[
	//nombre del jugador - valoración de 2 a 8 (solo pares)
    {nombre:'ju1',valor:2,resistencia:0,potencia:0},
    {nombre:'ju2',valor:4,resistencia:0,potencia:0},
    {nombre:'ju3',valor:6,resistencia:0,potencia:0},
    {nombre:'ju4',valor:6,resistencia:0,potencia:0},
    {nombre:'ju5',valor:4,resistencia:0,potencia:0},
    {nombre:'ju6',valor:8,resistencia:0,potencia:0},
    {nombre:'ju7',valor:2,resistencia:0,potencia:0},
    {nombre:'ju8',valor:6,resistencia:0,potencia:0},
    {nombre:'ju9',valor:4,resistencia:0,potencia:0},
    {nombre:'ju10',valor:8,resistencia:0,potencia:0},
    {nombre:'ju11',valor:8,resistencia:0,potencia:0},
    {nombre:'ju12',valor:2,resistencia:0,potencia:0}
];
var cant_repeticiones=0;
$(document).ready(function() {
	var tot=0;
  var med=0;
  var aprox=false;
  $.each(jugadores, function( index, value ) {
    tot=tot+value.valor;
  });
  med=tot/2;
  if(med%1!=0){
  	med=Math.round(med);
    aprox=true;
  }
  makeTeam(med,aprox);
});

function generar_teams(banca){
  jugadores=banca;
  var tot=0;
  var med=0;
  var aprox=false;
  $.each(jugadores, function( index, value ) {
    var totJugador=parseInt(value.valor)+parseInt(value.potencia)+parseInt(value.resistencia);
    tot=tot+totJugador;
  });
  med=tot/2;
  if(med%1!=0){
    med=Math.round(med);
    aprox=true;
  }
  makeTeam(med,aprox);
}

function makeTeam(tot_team,isAprox){
	$('#team1').html('');
  $('#team2').html('');
	var c_team1=0;
  var team1 = [];
  var team2 = [];
	$.each(shuffle(jugadores), function( index, value ) {
    var totJugador=parseInt(value.valor)+parseInt(value.potencia)+parseInt(value.resistencia);
    if((c_team1+totJugador)<=tot_team && team1.length<6){
    	c_team1=c_team1+totJugador;
    	team1.push(value);
      $('#team1').append('<li class="list-group-item">'+value.nombre+'</li>');
    }else if(team2.length<6 && team1.length<=6){
    	$('#team2').append('<li class="list-group-item">'+value.nombre+'</li>');
    }
  });
  if(isAprox){
  	if(c_team1!=tot_team || c_team1!=(tot_team-1) || team1.length<6){
    	makeTeam(tot_team);
    }else{
      cant_repeticiones=0;
    }
  }else{
  	if(c_team1!=tot_team || team1.length<6){
    	makeTeam(tot_team);
    }else{
      cant_repeticiones=0;
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}