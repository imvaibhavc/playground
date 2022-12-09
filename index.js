// curring using closures and bind

function fun(a) {
    return function(b) {
        return a + b;
    }
}

console.log(fun(2)(2));