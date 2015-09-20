var app = angular.module('myApp', ['angularMoment']);


app.controller('redditController', ['$scope', function($scope) {

  $scope.totalVotes = 0;

  var castlewoodCanyon = {
    'title': 'Castlewood Canyon, CO',
    'author': 'Kierston',
    'image': 'http://www.runningguru.com/Images/1996/castlewood%20ridge.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'date': Date.now()
  };

  $scope.entries = [castlewoodCanyon];

  $scope.addEntry = function() {
    var entry = {
      'title': $scope.title,
      'author': $scope.author,
      'image': $scope.image,
      'description': $scope.description,
      'date': Date.now()
    };
    $scope.entries.push(entry);
  };

  $scope.upvote = function() {
    totalVotes++;
  };

  // upvote();

  $scope.downvote = function() {
    totalVotes--;
  };

  // downvote();

}]);
