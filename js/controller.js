var app = angular.module('MyApp', []);
app.controller('formController', function($scope,$http){

	$scope.formdata={};

	$scope.sendData=function(){
		$http.post('recibirdatos.php', $scope.formdata).success(function(data,status){
			//
		});
	};
});