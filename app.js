let rawWords = `1. American Civil Liberties Union
2. Back to Africa Movement
3. Communism
4. Consolidation
5. Consumer Price Index
6. Consumer culture
7. Creationism
8. Credit
9. Flapper
10. Fundamentalist
11. Harlem Renaissance
12. Indian Citizenship Act of 1924
13. Installment Buying
14. Isolationism
15. Jazz Age
16. Lost Generation
17. Kellogg Briand Pact
18. Modernist
19. Normalcy
20. Recession
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