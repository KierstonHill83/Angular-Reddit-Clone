var app = angular.module('myApp', ['angularMoment']);


app.controller('redditController', ['$scope', function($scope) {

  var castlewoodCanyon = {
    'title': 'Castlewood Canyon, CO',
    'author': 'Kierston',
    'image': 'http://www.runningguru.com/Images/1996/castlewood%20ridge.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'date': Date.now(),
    'votes': 0,
    'comment': {}
  };

  var redwood = {
    'title': 'Redwood National Park, CA',
    'author': 'Kierston',
    'image': 'http://www.adventurerents.com/images/ca11180.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'date': Date.now(),
    'votes': 0,
    'comment': {}
  };

  var yosemite = {
    'title': 'Yosemite National Park, CA',
    'author': 'Kierston',
    'image': 'http://www.yosemitepark.com/Images/home-img-01.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'date': Date.now(),
    'votes': 0,
    'comment': {}
  };

  $scope.entries = [castlewoodCanyon, redwood, yosemite];
  $scope.showForm2 = false;


  $scope.addEntry = function() {
    var entry = {
      'title': $scope.title,
      'author': $scope.author,
      'image': $scope.image,
      'description': $scope.description,
      'date': Date.now(),
      'votes': 0,
      'comment': {}
    };
    $scope.entries.push(entry);
  };


  $scope.upvote = function() {
    this.entry.votes++;
  };


  $scope.downvote = function() {
    this.entry.votes--;
  };


  $scope.addComment = function() {
    var comment = {
      'text': $scope.textComment,
      'author': $scope.authorComment
    };
  };

  $scope.showCommentForm = function() {
    $scope.showForm2 = true;
  };

}]);
