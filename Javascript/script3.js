const dropDownList = [
  { value: "newark", content: "newark" },
  { value: "santaClara", content: "santaClara" },
  { value: "unionCity", content: "unionCity" },
  { value: "albany", content: "albany" },
  { value: "dalyCity", content: "dalyCity" },
  { value: "sanJose", content: "sanJose" },
];

var up = document.getElementById("GK");
var down = document.getElementById("GF");
var select = document.getElementById("arr");
var elmts = ["NEWARK", "UNION CITY ", "DALY CITY", "SAN JOSE"];
up.innerHTML =
  "Click on the button to " +
  "perform the operation" +
  ".<br>Array - [" +
  elmts +
  "]";

// Main function
function GF() {
  for (var i = 0; i < elmts.length; i++) {
    var optn = elmts[i];
    var el = document.createElement("option");
    el.textContent = optn;
    el.value = optn;
    select.appendChild(el);
  }
  down.innerHTML = "Elements Added";
}
