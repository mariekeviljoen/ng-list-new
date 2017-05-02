myApp.controller('FormController',
  ['$scope', '$rootScope', '$firebaseArray',
  function($scope, $rootScope, $firebaseArray) {

    var ref = firebase.database().ref();
    //var breweriesRef = ref.child('breweries');
    var breweriesInfo = $firebaseArray(ref);

        /*$scope.addBrewery = function() {
          breweriesInfo.$add({
            name: $scope.breweryname,
            date: firebase.database.ServerValue.TIMESTAMP,
            shortname: $scope.shortname,
            email: $scope.email,
            weburl: $scope.weburl,
            tel: $scope.tel,
            address: $scope.address,
            category: $scope.category,
            region: $scope.region,
            option: $scope.option,
            description: $scope.description  
          }).then(function() {
            $scope.breweryname='',
            $scope.shortname='',
            $scope.email='',
            $scope.weburl='',
            $scope.tel='',
            $scope.address='',
            $scope.category='',
            $scope.region='',
            $scope.option='',
            $scope.description='';
          }); //promise
        } //addBrewery*/
      
      $scope.addItem = function() {
          breweriesInfo.$add({
             name: $scope.name,
             date: firebase.database.ServerValue.TIMESTAMP 
          }).then(function() {
              $scope.name='';
          });
      }

        $scope.deleteItem = function(key) {
          breweriesInfo.$remove(key);
        } //deleteMeeting

}]); //myApp.controller