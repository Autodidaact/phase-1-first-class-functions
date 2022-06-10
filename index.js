function receivesAFunction(spy){
    spy();
}
function myfunc() {return Math.PI * 10 ** 2};
receivesAFunction(myfunc());
function returnsANamedFunction(){
    return function area(){
        return Math.PI * 10 ** 2
    };
}
function returnsAnAnonymousFunction(){
    return function () {
        return Math.PI * 10 ** 2}
}