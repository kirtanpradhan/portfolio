
function clicked(num){
    let disp = document.getElementById(num);
}

disp.addEventListener("click", function(){
    document.getElementById("display").innerText = disp.value;
});


