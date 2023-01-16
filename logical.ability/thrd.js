// what will be the value of sum after running the below function
function solve() {
    var i=0; var sum=0;
    while(i<100){
        sum =sum+i;
        sum = i+sum;
        i++;
    }
    console.log(sum);
}
solve();