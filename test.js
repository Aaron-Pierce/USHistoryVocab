const fs = require('fs');
const crypto = require('crypto')
let content = fs.readFileSync("./glossary.json");
let glossary = JSON.parse(content)
console.log(glossary[crypto.createHash("sha256").update("zoot suit riots".toLowerCase().replace(/\s/g, "")).digest('base64')]);