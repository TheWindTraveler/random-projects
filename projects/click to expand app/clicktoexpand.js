let buttonEl1 = document.getElementById("btn-1");
let buttonEl2 = document.getElementById("btn-2");
let popup = document.getElementById("popup")

buttonEl1.addEventListener("click", function(){
    popup.style.display = "block";
})

function closePopup(){
    popup.style.display = "none";
}