app.controller("serverController",["$scope","server",function(){
    server.getData().then(function(data){
         $scope.items=data.data
      })
}])