// avoid getting the same value between the Two HTML select element

document.getElementById("type").addEventListener("change", function () {
  var select = document.getElementById("convert-to");
  var selectedValue = this.value;

  // avoid getting the same value between the first and the second select
  // when the user starts to initialize the second select (convert-to select)
  if (selectedValue == select.value) select.selectedIndex = 0;

  // Loop through all options
  for (var i = 0; i < select.options.length; i++) {
    var option = select.options[i];
    option.style.display = "block";
    // Hide the option if it's not the selected one
    if (option.value == selectedValue) {
      option.style.display = "none";
    }
  }
});

// Temperature Convert function

document.getElementById("convert").addEventListener("click", function () {
  let degree = document.getElementById("degree");

  let unit = document.getElementById("type");

  let convertTo = document.getElementById("convert-to");

  // check the input and select  are not empty
  if (degree.value === "") {
    degree.style.borderColor = "red";
    return;
  } else {
    degree.style.borderColor = "#eee";
  }

  if (unit.value === "") {
    unit.style.outline = "2px solid red";
    return;
  } else {
    unit.style.outline = "initial";
  }

  if (convertTo.value === "") {
    convertTo.style.outline = "2px solid red";
    return;
  } else {
    convertTo.style.outline = "initial";
  }

  let result;
  const k = 273.15;

  // covert temperature
  switch (unit.value) {
    case "fahrenheit":
      convertTo.value == "celsius"
        ? (result = fToc() + " °C")
        : (result = fToc() + k + " °K");
      break;
    case "celsius":
      convertTo.value == "fahrenheit"
        ? (result = cTof() + " °F")
        : (result = Number(degree.value) + k);
      break;
    case "kelvin":
      convertTo.value == "celsius"
        ? (result = (degree.value - k).toFixed(2) + " °C")
        : (result = cTof(degree.value - k) + " °F");
  }

  document.getElementById("result").value = result;

  // celsius to fahrenheit
  function cTof(deg = degree.value) {
    return ((9 / 5) * deg + 32).toFixed(2);
  }

  // fahrenheit to celsuis
  function fToc(deg = degree.value) {
    return (((deg - 32) * 5) / 9).toFixed(2);
  }
});
