'use strict';

angular.module('core.article').
  factory('ArticleService', ['$resource',
    function($resource) {
      return $resource('posts/:pageNumber', {}, {
        query: {
          method: 'GET',
          params: {pageNumber: 'phones'},
          isArray: true
        }
      });
    }
  ]);
