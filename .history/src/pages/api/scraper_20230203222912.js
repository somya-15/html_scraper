const cheerio = require("cheerio");

// read the content of the HTML file
const fileInput = document.querySelector(
  "../Fast Character D&D Character Maker Dragonborn (Red Dragon Ancestry) Cleric 3 (Domain of Peace).html"
);
const reader = new FileReader();

reader.onload = function () {
  console.log(reader.result);
};

fileInput.addEventListener("change", function () {
  reader.readAsText(fileInput.files[0]);
});

const $ = cheerio.load(reader.result);
$("div.id").text("Hello there!");
