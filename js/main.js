// Denna js-fil kommer sköta arbetet mellan min JSON-fil och min webbsida

console.log("Javascript fungerar!");

// Skapar en asynkron funktion som jag döper till loadCV för att hämta och visa min CV information från json-filen.
// Jag måste använda en asynkron funktion för att kunna await inom den och kunna hämta och visa min CV information
async function loadCV() {
  //Webbläsaren begär JSON-filen och väntar på svaret.
  const response = await fetch("./data/cv.json");
  //Svarets JSON-innehåll görs om till JavaScript-data.
  const data = await response.json();

  //Console.loggar ut workExperience från json filen.
  console.log(data.workExperience);
  console.log(data.education);
}

loadCV();
