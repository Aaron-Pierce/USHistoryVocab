
const fs = require('fs');
const crypto = require('crypto');
const opn = require('opn');
let content = fs.readFileSync("./resources/glossary.json");
let glossary = JSON.parse(content)

function createHash(str){
    return crypto.createHash("sha256").update(str.toLowerCase().replace(/\s/g, "")).digest('base64')
}

function submit(){
    let words = rawWords.replace(/\n/g, "").replace(/([0-9][0-9]*)(. )/g, 'ę').split('ę')
    // console.log(words)
    // console.log(glossary)
    
    
    for(word of words){
        // console.log(createHash(word))
        let entry = glossary[createHash(word)];
        if(entry === undefined){
            opn("https://www.google.com/search?q=" + word.replace(/\s/g, "%20"));
            console.log(word + ":" + " defined in browser\n")
            
        }else{
            console.log(entry.term + ": " + entry.definition);
            console.log("\n")
        }
    }
}
