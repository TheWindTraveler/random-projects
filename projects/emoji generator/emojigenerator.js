const emojis = [
    "😀", "😁", "☺️", "😙", "😘", "🥰", "😍", "😌", "😉", "😭", "😤", "😨", "😱", "😶‍🌫️", "🥶", "🥵", "😳", "🤯", 
    "🤬", "🤩", "🥳", "☠️", "🤕", "🤒", "💀", "👻", "😻", "💩", "😽", "👊", "🤛", "👁️", "👀", "🫁", "🫂"
];


let randomEmojiBox1 = document.getElementById("random-emoji-box-1");
let randomEmojiBox2 = document.getElementById("random-emoji-box-2");
let emojiLength = 5;
let generateEmoji = document.getElementById("generate-emoji");

generateEmoji.addEventListener("click", function(){
    let randomEmoji1 = "";
    let randomEmoji2 = "";
    for (let i = 0; i < emojiLength; i++){
        let randomEmojiIndex1 = Math.floor(Math.random() * emojis.length)
        let randomEmojiIndex2 = Math.floor(Math.random() * emojis.length)
        randomEmoji1 += emojis[randomEmojiIndex1];
        randomEmoji2 += emojis[randomEmojiIndex2];
    }

    randomEmojiBox1.textContent = randomEmoji1;
    randomEmojiBox2.textContent = randomEmoji2;
 
})