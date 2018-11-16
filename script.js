//onLoad condition to load everything first
window.onload = function() {
  //var input is both the number display and value input
  var input = document.getElementById("inputBox");
  //targeting container so we know where the click is made. This way retrieves all buttons in container.
  var container = document.getElementById("container");
  //event listener to target buttons in container. Uses event target id parameter on button click
  container.addEventListener("click", function(e) {
    buttonClick(e.target.id);
  });
  //create calc variable to hold equal button. Add event listener to call calculate function.
  var calc = document.getElementById("button=");
  calc.addEventListener("click", calculate);

  //creates c variable that calls erase function that clears the calculator
  var c = document.getElementById("buttonc");
  c.addEventListener("click", erase);

  function buttonClick(buttonId) {
    //gets button and its id
    if (buttonId != "buttonc" && buttonId != "button=") {
      var button = document.getElementById(buttonId);
      //use temp variable and alter the id of the button with replace to a value.
      var tmp = buttonId;
      tmp = tmp.replace("button", "");
      //This will add particular value to end of string in input box
      entries(tmp);
    }
  }
  function entries(tmp) {
    input.value += tmp;
  }
  //Error catch when only a decimal is entered and equaled.
  function calculate() {
    if (input.value == ".") {
      alert("Please enter mathmatical expression");
      return;
    }
    input.value = eval(input.value);
  }
  function erase() {
    input.value = "";
  }
};
