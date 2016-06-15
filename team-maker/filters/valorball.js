app.filter('valorball', function($sce) {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(valor) {

    var retorno='';
	for(var i=0;i<(valor/2);i++){
	   retorno+='<i class="fa fa-futbol-o" aria-hidden="true"></i>';
	}

    return $sce.trustAsHtml(retorno);

  }

});