let rawWords = `
1. Fascism
2. Nationalism
3. Racism
4. Militarism
5. Appeasement
6. Axis Powers
7. Allied Powers
8. Belligerent
9. Nazism
10. Lebensraum
11. Propaganda
12. Anti-Semitic
13. Lend Lease Program
14. Isolationism
15. Adolf Hitler
16. Hideki Tojo
17. Benito Mussolini
18. Winston Churchill
19. Neutrality Acts
20. Pearl Harbor
`

const fs = require('fs');
const crypto = require('crypto');
const opn = require('opn');
let content = fs.readFileSync("./glossary.json");
let glossary = JSON.parse(content)

function createHash(str){
    return crypto.createHash("sha256").update(str.toLowerCase().replace(/\s/g, "")).digest('base64')
}

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