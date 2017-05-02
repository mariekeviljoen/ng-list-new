var app = angular.module('copyright', [], function() {})

app.directive('appFooter', function () {
    return {
        restrict: 'E',
        template: '<span class="footer_copy">&copy; {{ footer.date | date:"yyyy" }} Angular</span>',
        controller: function(){
            this.date = Date.now();
        },
        controllerAs:'footer'
    };
});