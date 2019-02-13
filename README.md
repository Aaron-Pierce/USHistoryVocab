
# [US History Vocab Scraper](https://saxten2011.github.io/USHistoryVocab/)

## A website to define all of your TeachTCI vocab assignments from Mrs. Markman without having to search the book

# Usage

From the Word doc posted on google classroom, copy and paste the vocab list into the textarea on the website. You can leave the ordinal numbers before the words, just so long as each term is on its own line.
Example:

```text
1. American Civil Liberties Union
2. Back to Africa Movement
3. Communism
4. Consolidation
5. Consumer Price Index
```

After pasting in the list, hit submit, and the right column will populate with definitions. Some terms may not be in the TeachTCI glossary, so a link to a google search will be returned instead of a definition.


# API... ish

In order to match words from the glossary, the glossary had to be scraped and converted to JSON. You can find instructions on how to utilise this for other websites/programming projects in the ```./scripts``` directory