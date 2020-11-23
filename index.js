let todoval = document.getElementById('toso');
let btnVal = document.getElementById("btn");
let contan = document.getElementById("values");

btnVal.addEventListener("click",function(){
    var parar = document.createElement("p");
    parar.innerHTML = todoval.value;
    contan.appendChild(parar);
    todoval.value="";
})