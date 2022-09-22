const text = document.querySelector("#helloWorld");
const changeButtom = document.querySelector("#changeBtn");

changeButtom.addEventListener("click",buttomChange);


function buttomChange(){
    text.innerHTML = "Goodbye World";
};

