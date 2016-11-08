function Todo() {
    return {
        restrict: 'E',
        bindToController: true,
        controller: function() {
            this.items = [
                { name: 'Implement add button' },
                { name: 'Build delete functionality' },
                { name: 'Build edit functionality' }
            ]
        },
        controllerAs: 'todo',
        templateUrl: '/assets/templates/todo.html'
    }
}

Todo.$inject = [];

module.exports = Todo;