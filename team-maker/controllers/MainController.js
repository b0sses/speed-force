app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books lalal'; 
  $scope.promo ='hola';
  $scope.showGenerar=false;
  $scope.pila = [];
  $scope.update = function(user) {
  		if($scope.jugador 
  			&& $scope.jugador.nombre!='' 
  			&& $scope.jugador.valor!=''
  			&& $scope.jugador.nombre!=undefined
  			&& $scope.jugador.valor!=undefined
  			&& $scope.pila.length<12){
  			$scope.pila.push(user);
       		$scope.clear();
  		}else{
  			console.log('faltan datos');
  		}
      if($scope.pila.length==12){
        $scope.showGenerar=true;
        swal("OK!", "Ya hay 12 jugadores", "success");
      }
  };
  $scope.clear = function(){
  	$scope.jugador=null;
  };
  $scope.generar = function(){
    if($scope.pila.length==12){
    	$scope.pila_temp=[];
    	angular.copy($scope.pila, $scope.pila_temp);
      generar_teams($scope.pila_temp);
    }else{
      swal("Advertencia", "Faltan integrantes", "warning");
    }
  }
  $scope.removeItem = function(index){
    $scope.pila.splice(index, 1);
    if($scope.pila.length<12){
        $scope.showGenerar=false;
      }
  }
}]);