angular.module('starter.services', [])

    .factory('Books', function($http) {
        return {
            all: function(q, startIndex, callback) {
                $http({
                    method: 'JSONP',
                    url: 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAFz5EbsHHyVbnPNeOKFfnt4d7SbwqxuBo&q=' + q + '&startIndex=' + startIndex + '&callback=JSON_CALLBACK'
                }).success(callback);
            },
            get: function(bookId, callback) {
                $http({
                    method: 'JSONP',
                    url: 'https://www.googleapis.com/books/v1/volumes/'+ bookId + '?key=AIzaSyAFz5EbsHHyVbnPNeOKFfnt4d7SbwqxuBo&callback=JSON_CALLBACK'
                }).success(callback);
            }
        }
    });