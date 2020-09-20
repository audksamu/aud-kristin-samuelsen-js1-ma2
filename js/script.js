// question 1

const firstButton = document.querySelector("button");
firstButton.onclick = function(event){
    event.target.style.background = "green";
}

// question 2

const secondButton = document.querySelector(".toggler");
secondButton.onclick = function(){
    document.querySelector(".togglee").classList.toggle("extra");    
}

// question 3

const selectDropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");
selectDropdown.onchange = function (event){
    const selectNumber = event.target.value;
    paragraphsContainer.innerHTML = "";
    for (let i = 1; i<= selectNumber; i++){
        paragraphsContainer.innerHTML += `<p class = "content"></P>`;
    }

}

// question 4

const inputArea = document.querySelector("input");
const charCount = document.querySelector(".char-count b");
inputArea.onkeyup = function (event) {
    const textLen = event.target.value.length;
    charCount.innerHTML =  textLen;
}

// question 5

const body = document.querySelector("body");
function pageScroll (){
    const yScroll = window.scrollY;
    if (yScroll >= 35){
        body.classList.add("highlight");
    }
    else {
        body.classList.remove("highlight");
    }
}
window.addEventListener("scroll", pageScroll);
