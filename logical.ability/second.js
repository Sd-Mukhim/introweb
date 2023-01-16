// what will be the output from the following code for n=6;
function fib(n) {
    if(n<=1){
        return n;
    }else{
        return fib(n-1)+fib(n-2);
    }
}
let res = fib(6);
console.log(res)