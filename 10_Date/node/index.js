console.log(new Date().toLocaleString());

console.log(Date());

console.log(Date.now());

// ISO 8601

const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-DK").format(date);
console.log(danishDate);

const usDate = new Intl.DateTimeFormat("en-US").format(date);
console.log(usDate);
