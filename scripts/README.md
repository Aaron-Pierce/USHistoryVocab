
# US History Vocab Scraper

## The very first version of this program was a terminal program. This README is from that version.

### A nodejs program to define all of your TeachTCI vocab assignments from Mrs. Markman without having to search the book

# Installation

Clone this repository, and install dependencies

```bash
$ git clone https://github.com/SAXTEN2011/USHistoryVocab.git && npm install
```

# Usage
Firstly, populate the ```rawWords``` variable in ```app.js``` with your vocab list, each term separated by a line break. The ordinal numbers will be parsed out by the program.
Example:

```JavaScript
let rawWords = `
1. American Civil Liberties Union
2. Back to Africa Movement
3. Communism
4. Consolidation
5. Consumer Price Index
`  
```

After populating the variable, run app.js with node.

```bash
$ node app.js
```

The program will output the definitions of all of the words found in the dictionary to the terminal. Some words aren't in the book's glossary, so a google search query will be performed in a new tab for each word not in the glossary.

# API... ish

To allow searching the glossary offline, and to not worry about CORS policies or http requests, I scraped the TeachTCI glossary. The hash table, created from taking a sha256 hash of the lowercase, unwhitespaced term, can be found in glossary.json, free to use.

If you wish to store the glossary data some other way, html.txt contains the source html of the TeachTCI glossary page, and parse.js contains the script I used to generate glossary.json. You can modify this however you wish to create an encoding scheme of your own. sample.txt is included so that you can test parsing methods without wasting processing time iterating over the large source file.