angular.module('inlist', [])
.directive('inList', function () {
    // lets 
    function contains (arr, value) {
        if (arr === null) return false;
        return arr.indexOf(value) != -1;
    }
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, el, attrs, ctrl) {
            if (attrs.inList) {
                ctrl.$parsers.unshift(function (viewValue) {
                    var valid = contains(scope.$eval(attrs.inList), viewValue);
                    ctrl.$setValidity('inList', valid);

                    return valid ? viewValue : undefined;
                });
            }
        }
    };
});