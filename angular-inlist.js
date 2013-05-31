angular.module('inlist', [])
.directive('inList', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, el, attrs, ctrl) {
            if (attrs.inList) {
                ctrl.$parsers.unshift(function (viewValue) {
                    var valid = _.contains(scope.$eval(attrs.inList), viewValue);
                    ctrl.$setValidity('inList', valid);

                    return valid ? viewValue : undefined;
                });
            }
        }
    };
});