function fun() {
    const sec = document.querySelector("section");
    const span = document.createElement("span");

    span.classList.add("bullets");

    let left = Math.random()*window.innerWidth;

    span.style.left = left + "px";

    sec.appendChild(span);

    setTimeout(function() {
        sec.removeChild(span);
    },5000);
}

setInterval(fun,100);


const text = document.getElementById("text");

let info = ["Hello", "Anshika", "Agrawal"];
let data = "";
let i = 0;
let j = 0;

generateText();

function generateText() {

    if (j<info.length) { 
        
        if (i<info[j].length) {
        let char = info[j].charAt(i);
        data = data + char;
        text.innerHTML=data;

        i++;
        setTimeout(generateText, 200);

        } else {
        data="";
        j++;
        i=0;

        setTimeout(generateText, 500);
        }
    } else {

        i=0;
        j=0;
        setTimeout(generateText, 700);
    }

}



