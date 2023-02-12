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

const classlevel = $("#classlevel").text();
console.log(classlevel); // Output: Cleric 3 (Domain of Peace)

const race = $("#race").text();
console.log(race); // Output: Dragonborn (Red Dragon Ancestry)

const background = $("#background").text();
console.log(background); // Output: Hermit

// create a JSON object with the data
const data = {
  classlevel,
  race,
  background,
};

// write the JSON object to a file
const fs = require("fs");
fs.writeFileSync("output.json", JSON.stringify(data, null, 4));

export default function handler(req, res) {
  res.status(200).json(data);
}
