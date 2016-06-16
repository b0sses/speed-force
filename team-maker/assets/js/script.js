var jugadores=[
	//nombre del jugador - valoración de 2 a 8 (solo pares)
    {nombre:'example 1',valor:2,resistencia:2,potencia:2,arq:0},
    {nombre:'example 2 arq',valor:4,resistencia:2,potencia:8,arq:1},
    {nombre:'example 3',valor:6,resistencia:10,potencia:2,arq:0},
    {nombre:'example 4',valor:6,resistencia:10,potencia:8,arq:0},
    {nombre:'example 5',valor:4,resistencia:2,potencia:6,arq:0},
    {nombre:'example 6',valor:8,resistencia:4,potencia:6,arq:0},
    {nombre:'example 7',valor:2,resistencia:6,potencia:2,arq:0},
    {nombre:'example 8',valor:6,resistencia:8,potencia:2,arq:0},
    {nombre:'example 9',valor:4,resistencia:8,potencia:8,arq:0},
    {nombre:'example 10 arq',valor:8,resistencia:2,potencia:10,arq:1},
    {nombre:'example 11',valor:8,resistencia:10,potencia:2,arq:0},
    {nombre:'example 12',valor:2,resistencia:6,potencia:4,arq:0}
];
var cant_repeticiones=0;
$(document).ready(function() {
	var tot=0;
  var med=0;
  var aprox=false;
  var arquero=0;
  $.each(jugadores, function( index, value ) {
    var totJugador=parseInt(value.valor)+parseInt(value.potencia)+parseInt(value.resistencia);
    tot=tot+totJugador;
    if(parseInt(value.arq)==1){
      arquero++;
    }
  });
  med=tot/2;
  if(med%1!=0){
    med=Math.round(med);
    aprox=true;
  }
  console.log('tot ',tot, ' med ',med);
  if(med%2!=0){
    med=med+1;
  }
  makeTeam(med,aprox,arquero);
});

function generar_teams(banca){
  jugadores=banca;
  var tot=0;
  var med=0;
  var aprox=false;
  var arquero=0;
  $.each(jugadores, function( index, value ) {
    var totJugador=parseInt(value.valor)+parseInt(value.potencia)+parseInt(value.resistencia);
    tot=tot+totJugador;
    console.log('aaa ' +value.arq);
    if(parseInt(value.arq)==1){
      arquero++;
    }
  });
  med=tot/2;
  if(med%1!=0){
    med=Math.round(med);
    aprox=true;
  }
  if(med%2!=0){
    med=med+1;
  }
  makeTeam(med,aprox,arquero);
}

function makeTeam(tot_team,isAprox,c_arq){
	$('#team1').html('');
  $('#team2').html('');
	var c_team1=0;
  var team1 = [];
  var team2 = [];
  var arq_team1=0;
  var arq_team2=0;
	$.each(shuffle(jugadores), function( index, value ) {
    var totJugador=parseInt(value.valor)+parseInt(value.potencia)+parseInt(value.resistencia);
    if((c_team1+totJugador)<=tot_team && team1.length<6){
    	c_team1=c_team1+totJugador;
    	team1.push(value);
      if(parseInt(value.arq)==1){
        if(c_arq>=2){
          arq_team1=1;
        }
      }
      $('#team1').append('<li class="list-group-item">'+value.nombre+'</li>');
    }else if(team2.length<6 && team1.length<=6){
      team2.push(value);
      if(parseInt(value.arq)==1){
        if(c_arq>=2){
          arq_team2=1;
        }
      }
    	$('#team2').append('<li class="list-group-item">'+value.nombre+'</li>');
    }
  });
  if(isAprox){
  	if(c_team1!=tot_team || c_team1!=(tot_team-1) || team1.length<6 || cant_repeticiones<=5){
    	cant_repeticiones++;
      makeTeam(tot_team,isAprox,c_arq);
    }else{
      if (cant_repeticiones==6){
        console.log('muchas repeticiones');
      }
      console.log('cant '+cant_repeticiones);
      cant_repeticiones=0;
    }
  }else{
    if((c_team1!=tot_team || team1.length<6) && cant_repeticiones<=5){
      cant_repeticiones++;
      makeTeam(tot_team,isAprox,c_arq);
    }else{
      if (cant_repeticiones==6){
        console.log('muchas repeticiones');
      }
      console.log('cant '+cant_repeticiones);
      if(c_arq>=2){
          if(arq_team1!=1 || arq_team2!=1){
            makeTeam(tot_team,isAprox,c_arq);
          }
      }
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