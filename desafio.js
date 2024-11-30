let quantidade = 0;
let res = window.document.getElementById('resultado');
    
function diminuir(){
    quantidade--;
    res.innerHTML = `${quantidade}`
    cor();
}

function resetar(){
     quantidade = 0;
     res.innerHTML = `${quantidade}`
     cor();
}

function aumentar(){
    quantidade++;
    res.innerHTML = `${quantidade}`
    cor();
}

function cor(){

    if(quantidade < 0){
        document.getElementById('resultado').style.color="red";
    }

    else if(quantidade > 0){
        document.getElementById('resultado').style.color="green";
    } 

    else{
        document.getElementById('resultado').style.color="black";
    }
}