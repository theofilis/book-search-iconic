angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope) {
        // Main app controller, empty for the example
        })

    // A simple controller that fetches a list of data
    .controller('BooksTabCtrl', function($scope, Books) {
        $scope.books = Books.all('java', 0, function(results) {
            $scope.books = results.items;
        });

        $scope.$on('tab.shown', function() {
            // Might do a load here
            });
        $scope.$on('tab.hidden', function() {
            // Might recycle content here
            });
    })

    // A simple controller that shows a tapped item's data
    .controller('BookCtrl', function($scope, $routeParams, Books) {
        $scope.book = Books.get($routeParams.bookId, function(results) {
            $scope.book = results;
        });
    });