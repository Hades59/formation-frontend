!function(e){
    function n(o){
        if(r[o])
        return r[o].exports;
        var t=r[o]={i:o,l:!1,exports:{}
    };
    return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports
}

var r={};
n.m=e,n.c=r,n.d=function(e,r,o){
    n.o(e,r)||Object.defineProperty(e,r,{
        configurable:!1,enumerable:!0,get:o
    })},
    n.n=function(e){
        var r=e&&e.__esModule?function(){
            return e.default
        }:function(){
            return e
        };
        return n.d(r,"a",r),r},n.o=function(e,n){
            return Object.prototype.hasOwnProperty.call(e,n)
        },
        n.p="",n(n.s=0)
    }
    ([function(e,n,r){var o=r(1);
        console.log("bonjour webpack !"),o.afficher()
    },
    function(e,n){
        e.exports.afficher=function(){
            console.log("Service A")}
        }]);