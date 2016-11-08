const angular = require('angular');
const Rx = require('rxjs');

require('./todo/Todo.bindings');

function Controller() {
    this.greeting = 'Hi, Arthur!';
}

angular.module('RxJS', [])
    .value('Rx', Rx);

angular.module('lasso', [
    'lasso.todo'
])
    .controller('Lasso', Controller);

angular.bootstrap(document.getElementsByTagName('body')[0], ['lasso']);