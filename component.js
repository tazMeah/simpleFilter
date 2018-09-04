"use strict";

const myComponent = {
template: `
<input type="text" ng-model="searching">
<li ng-repeat="person in $ctrl.classmates | filter:searching">{{person}}</li>

`,
controller: function() {
    const vm = this;
    vm.classmates = [
        "Ashley",
        "Jonathan",
        "Tremell",
        "Zavier",
        "Matty",
        "John",
        "Ben",
        "Chelsye",
        "Katie",
        "Taz",
        "Ken",
        "Sydney",
        "Adrean",
        "Jalen"
    ]
}
}

app.component("myComponent", myComponent)