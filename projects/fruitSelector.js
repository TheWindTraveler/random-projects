let boxEl1 = document.getElementById("box1");
let boxEl2 = document.getElementById("box2");
let boxEl3 = document.getElementById("box3");
let boxEl4 = document.getElementById("box4");
let boxEl5 = document.getElementById("box5");

let differentFruits = ["🍎", "🍐", "🥒", "🍐", "🍎", "🍐",
    "🍉", "🍈", "🍐", "🍉", "🥒", "🍐", "🍈", "🍉", "🍐", "🍈", "🥒"
];

function displayDifferentFruits(){
    for (let i = 0; i < differentFruits.length; i++){
        if (differentFruits[i] === "🍎" ){
            boxEl1.textContent += "🍎"; 
        } else if (differentFruits[i] === "🍉" ){
            boxEl2.textContent += "🍉";
        } else if (differentFruits[i] === "🍈"){
            boxEl3.textContent += "🍈";
        } else if (differentFruits[i] === "🥒"){
            boxEl4.textContent += "🥒";
        } else if (differentFruits[i] === "🍐"){
            boxEl5.textContent += "🍐";
        }
    }   
}

displayDifferentFruits()