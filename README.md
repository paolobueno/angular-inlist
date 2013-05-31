Angular-InList
===============

A validator directive for [AngularJS](http://angularjs.org) for checking if a value is contained on a list

Usage
---------------

Add a reference to `angular-inlist.js` to your webpage:

```html
<script src="angular-inlist.js"></script>
```

Inject the `inlist` module as a dependency of your own module/app

```javascript
angular.module('myApp', ['inlist']);
```

Then finally use it on your elements

```javascript
function myCtrl ($scope) {
  $scope.validValues = ['A', 'B', 'C'];
}
```
```html
<body>
  <form>
    <input type="text" in-list="validValues">
  </form>
</body>
```