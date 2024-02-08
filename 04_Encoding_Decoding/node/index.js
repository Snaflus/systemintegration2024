const sourceString = "Helloøæå"

const base64EncodedString = btoa(sourceString);

console.log(base64EncodedString);

const base64DecodedString = atob(base64EncodedString);

console.log(base64DecodedString);

console.log(sourceString == base64DecodedString)