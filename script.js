toggle = false;

function openNav(){
    toggle = !toggle;
}

if (toggle == true){
    document.getElementById("navSide").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

if (toggle == false){
    document.getElementById("navSide").style.width = "0";
    document.getElementById("main").style.marginLeft="0";
}

