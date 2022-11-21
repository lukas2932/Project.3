const box = document.getElementById("box");
const button = document.getElementById("button");
const health = document.getElementById("health");
const healthTwo = document.getElementById("healthTwo");
const info = document.getElementById("info");

let x = 10;

button.onmousedown = () => {
    let attackUp = x + 90;

    if(healthTwo.innerHTML == 0){
        info.innerHTML = "Nepritel zemrel.";
        clearInterval(interval);
    }else if(health.innerHTML > 0){
        box.style.left = `${attackUp}px`;
        healthTwo.innerHTML--;
    }
}
button.onmouseup = () => {
    let attackTwo = x;
    box.style.left = `${attackTwo}px`;
}
const interval = setInterval(() => {
    health.innerHTML--;
    if(health.innerHTML == 0){
        info.innerHTML = "Zmerel jsi."
        clearInterval(interval);
    }
},500)