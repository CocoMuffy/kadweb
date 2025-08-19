email = false;
first = false;
last = false;
checks = 0;
fname = document.getElementById("fname")
lname = document.getElementById("lname")
email = document.getElementById("email")
story = document.getElementById("story")
viable = document.getElementById("viablee")
comfy = document.getElementById("comfyy")
sober = document.getElementById("soberr")
possible = document.getElementById("posiblee")

function openNav() {
  document.getElementById("navSide").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("navSide").style.width = "0";
}

function emailEntered(){
    getElementbyId("")
}

function firstEntered(){
   if getElementbyId("") {
    first = true;
   }
}

function lastEntered(){
   if getElementById(""){
    last = true;
   } 
}

function addCheck(){
    viable.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
})
 comfy.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
})
}

function submitInfo(){
    if (email == true && first == true && last == true && checks == 4) {
        var link = "mailto:kadagainstdrugs@gmail.com"
        + "&subject =" + encodeURIComponent("fname") + " " + encodeURIComponent("lname");
        + "&body ="+ encodeURIComponent("story") + encodeURIComponent("email");
    }
    else {
        

    }
}

