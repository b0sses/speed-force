var jugadores=[
	//nombre del jugador - valoración de 2 a 8 (solo pares)
    {nombre:'ju1',valor:2},
    {nombre:'ju2',valor:4},
    {nombre:'ju3',valor:6},
    {nombre:'ju4',valor:6},
    {nombre:'ju5',valor:4},
    {nombre:'ju6',valor:8},
    {nombre:'ju7',valor:2},
    {nombre:'ju8',valor:6},
    {nombre:'ju9',valor:4},
    {nombre:'ju10',valor:8},
    {nombre:'ju11',valor:8},
    {nombre:'ju12',valor:2}
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
	console.log(med);
  makeTeam(med,aprox);
});

function generar_teams(banca){
  jugadores=banca;
  var tot=0;
  var med=0;
  var aprox=false;
  $.each(jugadores, function( index, value ) {
    tot=tot+parseInt(value.valor);
  });
  med=tot/2;
  if(med%1!=0){
    med=Math.round(med);
    aprox=true;
  }
  console.log(med);
  makeTeam(med,aprox);
}

function makeTeam(tot_team,isAprox){
	$('#team1').html('');
  $('#team2').html('');
	var c_team1=0;
  var team1 = [];
  var team2 = [];
	$.each(shuffle(jugadores), function( index, value ) {
    if((c_team1+parseInt(value.valor))<=tot_team && team1.length<6){
    	c_team1=c_team1+parseInt(value.valor);
    	team1.push(value);
      $('#team1').append('<li class="list-group-item">'+value.nombre+'</li>');
    }else if(team2.length<6 && team1.length<=6){
    	$('#team2').append('<li class="list-group-item">'+value.nombre+'</li>');
    }
  });
  if(isAprox){
  	if(c_team1!=tot_team || c_team1!=(tot_team-1) || team1.length<6){
    	makeTeam(tot_team);
      cant_repeticiones++;
    }else{
      cant_repeticiones=0;
    }
  }else{
	console.log('rep',cant_repeticiones);
  	if(c_team1!=tot_team || team1.length<6){
    	makeTeam(tot_team);
      cant_repeticiones++;
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

function valorVisiual(valor){
  var retorno='';
  for(var i=0;i<=(valor/2);i++){
    retorno+='<i class="fa fa-futbol-o" aria-hidden="true"></i>';
  }
  return retorno;
}