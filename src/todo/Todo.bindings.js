const angular = require('angular');
const Todo = require('./Todo');

angular.module('lasso.todo', [])
    .directive('lsTodo', Todo);