// var userName = prompt("Hey Tell me you name?")

// var welcomeMessage = "Welcome "+userName;

// alert(welcomeMessage)

var buttonTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output-text")
var servUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// console.log(buttonTranslate); 

function getTranslateUrl(text){
      return servUrl + "?text=" + text
}

buttonTranslate.addEventListener("click", function clickEventHandler(){
    // console.log("clicked")
    // console.log("input", textInput.value);

    // outputDiv.innerText = textInput.value; 

    var inputText = textInput.value
    fetch(getTranslateUrl(inputText))
         .then(response => response.json())
         .then(json => console.log(json.contents.translated))

})
