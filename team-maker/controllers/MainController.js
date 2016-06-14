app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books lalal'; 
  $scope.promo ='hola';
  $scope.pila = [];
  $scope.update = function(user) {
  		if($scope.jugador 
  			&& $scope.jugador.nombre!='' 
  			&& $scope.jugador.valor!=''
  			&& $scope.jugador.nombre!=undefined
  			&& $scope.jugador.valor!=undefined
  			&& $scope.pila.length<=12){
  			$scope.pila.push(user);
       		$scope.clear();
  		}else{
  			console.log('inserte valores o ya tiene muchos jugadores')
  		}
      };
  $scope.clear = function(){
  	$scope.jugador=null;
  };
  $scope.generar = function(){
  	
  }
}]);