document.getElementById('btn').onclick = changeP;
document.getElementById('ptext').style.opacity = "0.7";
document.getElementById('ptext').style.backgroundColor = "Red";
function changeP() {
    document.getElementById('ptext').innerHTML = "da thay doi";
    document.getElementById('ptext').style.opacity = "1";
    document.getElementById('ptext').style.backgroundColor = "yellow";
    console.log(changeP);
}

function changeimg() {
    var img = document.getElementById("changebulb");

    if(img.src.match("bulbon")){
        img.src = "img/pic_bulboff.gif";
    }else{
        img.src = "img/pic_bulbon.gif"
    }
}

function click() {
    var inputdisable = document.getElementById("input").innerHTML = disabled="disabled";
    var btndisable = document.getElementById("btn").innerHTML = disabled;
    if(click.inputdisable){
        inputdisable = click;
    }else{
        btndisable = click;
    }
}