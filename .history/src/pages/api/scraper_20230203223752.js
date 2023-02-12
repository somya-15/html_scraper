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

// load the content of the HTML file into cheerio
const $ = cheerio.load(reader.result);

// extract the data
// const name = $("div").text();
// const description = $("p").text();
// const image = $("img").attr("src");

const playername = $("#playername").text();
console.log(playername); // Output: Somya

// create a JSON object with the data
const data = {
  name,
  description,
  image,
};

// write the JSON object to a file
const fs = require("fs");
fs.writeFileSync("output.json", JSON.stringify(data, null, 4));

export default function handler(req, res) {
  res.status(200).json(data);
}
