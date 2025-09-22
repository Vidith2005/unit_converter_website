const category = document.getElementById("category");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");

const units = {
  length: ["Meters", "Feet"],
  weight: ["Kilograms", "Pounds"],
  temperature: ["Celsius", "Fahrenheit"]
};

function populateUnits() {
  const selected = category.value;
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";
  units[selected].forEach(unit => {
    const option1 = document.createElement("option");
    option1.value = unit.toLowerCase();
    option1.textContent = unit;

    const option2 = option1.cloneNode(true);
    fromUnit.appendChild(option1);
    toUnit.appendChild(option2);
  });
}

function convert() {
  const val = parseFloat(inputValue.value);
  if (isNaN(val)) {
    outputValue.value = "Enter a number";
    return;
  }

  const from = fromUnit.value;
  const to = toUnit.value;
  let result = val;

  switch (category.value) {
    case "length":
      if (from === "meters" && to === "feet") result = val * 3.28084;
      else if (from === "feet" && to === "meters") result = val / 3.28084;
      break;

    case "weight":
      if (from === "kilograms" && to === "pounds") result = val * 2.20462;
      else if (from === "pounds" && to === "kilograms") result = val / 2.20462;
      break;

    case "temperature":
      if (from === "celsius" && to === "fahrenheit") result = (val * 9) / 5 + 32;
      else if (from === "fahrenheit" && to === "celsius") result = ((val - 32) * 5) / 9;
      break;
  }

  outputValue.value = result.toFixed(2);
}

category.addEventListener("change", populateUnits);
convertBtn.addEventListener("click", convert);

populateUnits(); // initialize on load
