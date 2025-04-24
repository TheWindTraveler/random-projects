let fighterEl1 = document.getElementById("fighter1");
let fighterEl2 = document.getElementById("fighter2");

let fighters = [
    "🦁", "🐒", "🦍", "🐈‍⬛",
    "🐅", "🦒", "🦓", "🦄",
    "🐃", "🐻", "🐍"
];

document.querySelector("#pickFighters").addEventListener("click", function(){
    let randomIndex1 = Math.floor(Math.random() * fighters.length);
    let randomIndex2 = Math.floor(Math.random() * fighters.length);
    fighterEl1.textContent = fighters[randomIndex1];
    fighterEl2.textContent = fighters[randomIndex2];



    document.getElementById("vs").textContent = "VS";S
})