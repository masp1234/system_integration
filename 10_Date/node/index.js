
console.log(new Date());
console.log(new Date().toString());
// Z'et står for Zulu, som står for zero - natotid?

console.log(Date.now());

// ISO 8601

const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-dk").format(date);
console.log(danishDate);

const americanDate = new Intl.DateTimeFormat("en-us").format(date)
console.log(americanDate);