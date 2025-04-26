const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBox1 = document.getElementById("password-box-1");
let passwordBox2 = document.getElementById("password-box-2");
let passwordLength = 15;
let generatePassword = document.getElementById("generate-password");



generatePassword.addEventListener('click', function(){
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < passwordLength; i++){
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomIndex1];
        password2 += characters[randomIndex2];
    }
    passwordBox1.textContent = password1;
    passwordBox2.textContent = password2;
});