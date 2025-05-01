let buttonEl1 = document.getElementById("btn-1");
let buttonEl2 = document.getElementById("btn-2");
let popup1 = document.getElementById("popup1")
let popup2 = document.getElementById("popup2")

buttonEl1.addEventListener("click", function(){
    popup1.style.display = "block";
})

buttonEl2.addEventListener("click", function(){
    popup2.style.display = "block";
})

function closePopup(){
    popup1.style.display = "none";
    popup2.style.display = "none";
}