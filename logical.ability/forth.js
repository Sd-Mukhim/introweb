// what will be the output from the following code for n=6;

function para1(n) {
    if(n==0  ||  n==1 || n==2){
        return 0;
    }
    if(n==3){
        return 1;
    }else{
        return para1(n-1)+para1(n-2)+para1(n-3);
    }
}
var res =para1(6);
console.log(res)
function para2(n){
    var bag=0;
    for(var j=1; j<n; j++){
        bag += para2(j)+ " ";
    }
    console.log(bag);
}
let res1 =para2(6);
console.log(res1)