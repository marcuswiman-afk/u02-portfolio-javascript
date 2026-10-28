// Denna js-fil kommer sköta arbetet mellan min JSON-fil och min webbsida

// console.log("Javascript fungerar!");

// Skapar en asynkron funktion som hämtar CV-information från JSON.
// async gör att vi kan använda await inuti funktionen.

async function loadCV() {
  // fetch() begär filen cv.json från servern.
  // await pausar funktionen loadCV tills vi fått ett svar.
  // Svaret sparas i variabeln response.
  const response = await fetch("./data/cv.json");

  // response.json() läser svarets innehåll och tolkar JSON.
  // await väntar tills innehållet har omvandlats till JavaScript-data.
  // Resultatet sparas i variabeln data.
  const data = await response.json();

  // Söker i DOM:en efter HTML-elementet med ID "work-list".
  // Sparar en referens till elementet i variabeln workList.
  const workList = document.querySelector("#work-list");

  // Gör samma sak för HTML-elementet med ID "education-list".
  const educationList = document.querySelector("#education-list");

  const template = document.querySelector("#education-template");

  // Skapar en ny h3 som är tom (createelement)
  //Valde istället querySelector istället för createelement då det finns i HTML redan

  // Hittar det första HTML-elementet med klassen "article-content" i DOM:en.
  // Sparar en referens till elementet i variabeln article.
  // const article = document.querySelector(".article-content");
  const articlesWork = workList.querySelectorAll(".article-content");

  // const articlesEducation = educationList.querySelectorAll(".article-content");

  // Hämtar det första objektet (index 0) från arrayen workExperience i JSON-datan.
  // Sparar objektet i variabeln job, så att vi enklare kan använda t.ex. job.title.
  const jobs = data.workExperience;

  const educations = data.educations;

  // const heading = document.querySelector("#work-list h3");
  // const pill = document.querySelector("#work-list .pill-tag");
  // const company = document.querySelector("#work-list .company");
  // const cityCountry = document.querySelector("#work-list .cityCountry");
  // const date = document.querySelector("#work-list .date");
  // Ger den tomma h3an innehåll

  // forEach() går igenom alla jobb i arrayen jobs, ett i taget.
  // job är det aktuella objektet från JSON-filen.
  // index är objektets position i arrayen (0, 1, 2 osv.).
  // Koden inom { } körs en gång för varje jobb.

  // <!-- Work Experience -->
  jobs.forEach((job, index) => {
    // articles innehåller alla HTML-kort som vi hämtat med querySelectorAll().
    // articles[index] väljer det HTML-kort som har samma position som jobbet.
    // Referensen sparas i variabeln article.
    // Därmed kopplas rätt jobb från JSON till rätt HTML-kort.
    const article = articlesWork[index];

    // Hittar h3-rubriken inuti article och ersätter texten
    // med jobbtiteln från JSON-objektet.
    article.querySelector("h3").textContent = job.title;

    // Hittar elementet med klassen "pill-tag" inuti article
    // och ersätter texten med anställningsformen från JSON.
    article.querySelector(".pill-tag").textContent = job.employmentType;

    // Hittar elementet med klassen "company" inuti article
    // och ersätter texten med företagsnamnet från JSON.
    article.querySelector(".company").textContent = job.company;

    // Hittar elementet med klassen "cityCountry" inuti article
    // och ersätter texten med platsinformationen från JSON.
    article.querySelector(".cityCountry").textContent = job.cityCountry;

    // Hittar elementet med klassen "date" inuti article
    // och ersätter texten med anställningsperioden från JSON.
    article.querySelector(".date").textContent = job.date;
  });

  // <!-- Education -->
  educations.forEach((education) => {
    const article = template.content.firstElementChild.cloneNode(true);

    article.querySelector("h3").textContent = education.title;
    article.querySelector(".pill-tag").textContent = education.educationType;
    article.querySelector(".company").textContent = education.School;
    article.querySelector(".cityCountry").textContent = education.cityCountry;
    article.querySelector(".date").textContent = education.date;

    educationList.append(article);
  });

  // educations.forEach((education) => {
  //   const article = document.createElement("article");
  //   article.classList.add("article-content");

  //   const articleTitle = document.createElement("div");
  //   // Adderar från CSS
  //   articleTitle.classList.add("article-title");

  //   const heading = document.createElement("h3");
  //   heading.textContent = education.title;

  //   const pill = document.createElement("span");
  //   pill.textContent = education.educationType;
  //   pill.classList.add("pill-tag");

  //   articleTitle.append(heading, pill);
  //   educationList.append(articleTitle);
  //   educationList.append(article);
  // });

  // heading.textContent = data.workExperience[0].title)
  // pill.textContent = data.workExperience[0].employementType;
  // company.textContent = data.workExperience[0].company;
  // cityCountry.textContent = data.workExperience[0].cityCountry;
  // date.textContent = data.workExperience[0].date;
  // Lägg in den i HTML
  // workList.append(heading);
}

loadCV();

// Hämtar hem IDn för work-experience samt education genom DOMen. Detta är då IDs som ligger i html
