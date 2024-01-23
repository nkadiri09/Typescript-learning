var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("HELLO WORLD this is just an example..");
function add234(a, b, callback) {
    var added = a + b;
    console.log(added);
}
function addabfun(ab) {
    console.log(ab);
}
add234(10, 20, addabfun);
function callabtest(a) {
    console.log(a);
    return a;
}
var person = { name: 'narendra', age: 30 };
console.log(person);
var personObj = __assign({}, person);
console.log(personObj);
person.name = 'ramesh';
console.log(person);
console.log(personObj);
