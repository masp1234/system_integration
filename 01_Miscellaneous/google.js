const fs = require("fs");

async function fetchGoogle() {
    const google = await fetch('https://www.google.dk')
    const result = await google.text();
    fs.writeFileSync('google.html', result);
}

fetchGoogle();