(function(){
  console.log("Loading MainController");

  var app = angular.module("app", []);

  app.controller('MainController', function($scope){
    $scope.repoName = "angular-materiel-baseApp";
  })

})();
