// Denna js-fil kommer sköta arbetet mellan min JSON-fil och min webbsida

// console.log("Javascript fungerar!");

// Skapar en asynkron funktion som jag döper till loadCV för att hämta och visa min CV information från json-filen.
// Jag måste använda en asynkron funktion för att kunna await inom den och kunna hämta och visa min CV information
async function loadCV() {
  //Webbläsaren begär JSON-filen och väntar på svaret.
  const response = await fetch("./data/cv.json");
  //Svarets JSON-innehåll görs om till JavaScript-data.
  const data = await response.json();

  const workList = document.querySelector("#work-list");
  const educationList = document.querySelector("#education-list");

  // Skapar en ny h3 som är tom (createelement)
  //Valde istället querySelector då det finns i HTML redan
  const heading = document.querySelector("#work-list h3");
  // Ger den tomma h3an innehåll
  heading.textContent = data.workExperience[0].title;
  heading.textContent = data.workExperience[1].title;
  heading.textContent = data.workExperience[2].title;
  // Lägg in den i HTML
  // workList.append(heading);

  //Console.loggar ut workExperience från json filen.
  // console.log(data.workExperience);
  // console.log(data.education);
  // console.log(data.education[0].title);
  console.log(workList);
}

loadCV();

// Hämtar hem IDn för work-experience samt education genom DOMen. Detta är då IDs som ligger i html
