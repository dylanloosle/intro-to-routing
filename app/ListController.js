app.controller('ListController', function($scope, DataService){
    $scope.Test = "Our list is working";


    $scope.people = DataService.data;

    $scope.personClicked = function(person){
        $scope.clickedPerson = person.name;
    }
});