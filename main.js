

const oopsImg = document.getElementById('oops-img');
const oopsImgTwo = document.getElementById('oops-img-two');
const trueImg = document.getElementById('true-img');
const proveIt = document.getElementById("prove-it");
const title = document.getElementById("main-title");

console.log(oopsImgTwo);
let loop = 0;
proveIt.addEventListener('click', e => {
    if (loop === 0) {
        trueImg.style.display = 'none';
        proveIt.innerHTML = "Oops! Wrong one!";
        oopsImg.style.display = 'block';
        loop++;
    } else if (loop === 1) {
        proveIt.innerHTML = "Not this one!";
        oopsImg.style.display = 'none';
        oopsImgTwo.style.display = 'block';
        loop++;
    } else if (loop === 2) {
        proveIt.innerHTML = "There we go!";
        oopsImgTwo.style.display = 'none';
        trueImg.style.display = 'block';
        loop = 0;
    }
    
});

let titleStyle = title.style.display;
console.log('title', titleStyle)

setInterval(() => {
    
    if (titleStyle === "block") {
        titleStyle = "none";
    } else {
        titleStyle = "block"
    }
}, 1000)