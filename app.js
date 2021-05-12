// var userName = prompt("Hey Tell me you name?")

// var welcomeMessage = "Welcome "+userName;

// alert(welcomeMessage)

var buttonTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")

// console.log(buttonTranslate); 

buttonTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked")
    console.log("input", textInput.value);
})
