// Predict the output of the following code
function fun (a,b){
    if(b==0){ //2000==0 = false
        return a;
    }else{
        return fun(b, a%b); //(2000, 100%2000)
    }
}
var ans = fun(100, 4000);
console.log(ans);
