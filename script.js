(function () {
  "use strict";

  let convertType = "miles";
  const heading = document.querySelector("h1");
  const into = document.querySelector("p");
  const answerDiv = document.getElementById("Answer goes here");
  const form = document.getElementById("convert");

  //keydown event listener
  document.addEventListener("keydown", function (event) {
    var key = event.code;
    // alert(key);
    // if else statment required
    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to Miles Converter";
      into.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
      //change the heading
      //change intro paragraph
      //change value of convertType variable
    } else if (key === "KeyM") {
      //reuse code from the if statment and swap kilo and miles
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      into.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
  });
  //submit even listener
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      //conversion miles to kilomoeters 1.609344
      //conersion kilometers to miles 0.1621371192
      if (convertType === "miles") {
        const converted = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `${distance} miles converted to ${converted} kilometers`;
      } else {
        const converted = (distance * 0.621371192).toFixed(3);
        answerDiv.innerHTML = `${distance} kilometers converted to ${converted} miles`;
      }
    } else {
      answerDiv.innerHTML = "<h2>Please provide a number</h2>";
    }
  });
})();
