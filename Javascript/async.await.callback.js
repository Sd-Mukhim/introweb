// o/p error pls check when you are go ahead ..


const datas = [
    {name:"ajay", profession:"softwRE"},
    {name:"vjay", profession:"softwRE"}

];

function getDatas() {
    setTimeout(() => {
        let output ="";
        datas.forEach((data, index) => {
            output+= `<li>${data.index}</li>`
        })
        document.body.innerHTML = output;
    }, 2000);
}
getDatas();