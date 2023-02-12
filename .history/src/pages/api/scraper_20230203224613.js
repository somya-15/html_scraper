const cheerio = require("cheerio");

// read the content of the HTML file
const fs = require("fs");
const reader = fs.readFileSync("input.html", "utf8");

// load the content of the HTML file into cheerio
const $ = cheerio.load(reader.result);

// extract the data
// const name = $("div").text();
// const description = $("p").text();
// const image = $("img").attr("src");

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
