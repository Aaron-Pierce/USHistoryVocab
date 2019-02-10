var fs = require('fs'),
    readline = require('readline');
const crypto = require('crypto')

var rd = readline.createInterface({
    input: fs.createReadStream('./html.txt'),
    output: null,
    console: false
});
let linecount = 0;

let glossary = {
    
}

rd.on('line', function(line) {
    line = line.replace(/\t/g, "")
    if(line.indexOf("<span>") !== -1){
        let pair = line.replace(/<span>/, "");
        pair = pair.split("</span>");
        pair[0] = pair[0].replace(/^\s+/g, "");
        pair[1] = pair[1].replace(/^\s+/g, "");
        console.log(pair)
        glossary[crypto.createHash("sha256").update(pair[0].toLowerCase().replace(/\s/g, "")).digest('base64')] = {
            term: pair[0],
            definition: pair[1]
        }

    }
}).on("close", function () { 
    const stream = fs.createWriteStream("./glossary.json");
    stream.write(JSON.stringify(glossary))
 });

