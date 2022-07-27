const fs = require("fs");
const path = require("path");

function createEntry(body, entryArray) {
  const newEntry = body;
  entryArray.push(newEntry);
  fs.writeFileSync(
    path.join(__dirname, "../db/entry.json"),
    JSON.stringify({ entry })
  );
  return newEntry;
}

module.exports = {
  createEntry,
};
