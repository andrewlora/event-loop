const fs = require("fs");
const path = require("path");

console.time("setTimeout");

setTimeout(() => {
  console.log("End setTimeout");
  console.timeEnd("setTimeout");
}, 2);

console.time("readFile");
const filePath = path.join(".", "data", "users-mini.json");
// const filePath = path.join(".", "data", "users-big.json");

fs.readFile(filePath, "utf8", function readFileCb(err, data) {
  console.time("parse");
  const users = JSON.parse(data);
  console.timeEnd("parse");
  const { biography, ...user } = users[0];
  console.log(user);
  console.timeEnd("readFile");
});
