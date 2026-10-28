// Denna js-fil kommer sköta arbetet mellan min JSON-fil och min webbsida

// console.log("Javascript fungerar!");

// Skapar en asynkron funktion som hämtar CV-information från JSON.
// async gör att vi kan använda await inuti funktionen.

// <!-- CV via JSON -->
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
}

loadCV();

// <!-- Github project via API -->
async function loadProjects() {
  const response = await fetch(
    "https://api.github.com/users/marcuswiman-afk/repos"
  );

  // Hämtar alla repos
  const repos = await response.json();

  // Hämtar template ID från Project kort 1
  const projectTemplate = document.querySelector("#project-template");
  const projectGrid = document.querySelector(".projects-card-grid");

  repos.forEach((repo) => {
    // Hämtar HTML-innehållet från projectTemplate.
    // .content ger tillgång till innehållet i <template>.
    // .firstElementChild väljer det första HTML-elementet (<article>).
    // .cloneNode(true) skapar en kopia av hela kortet, inklusive alla element inuti.
    // Kopian sparas i variabeln article och kan fyllas med GitHub-data.
    const article = projectTemplate.content.firstElementChild.cloneNode(true);

    const liveLink = article.querySelector(".live-link");

    if (repo.homepage) {
      liveLink.href = repo.homepage;
    } else {
      liveLink.closest("li").remove();
    }

    article.querySelector("h3").textContent = repo.name;
    article.querySelector(".project-description").textContent =
      repo.description;
    article.querySelector(".project-tech-stack").textContent = repo.topics
      .join(", ")
      .toUpperCase();

    article.querySelector(".repo-link").textContent = repo.html_url;

    // picture
    // h3
    // project-description
    // live-link
    // repo-link
    projectGrid.append(article);
  });
}

loadProjects();

// Hämtar hem IDn för work-experience samt education genom DOMen. Detta är då IDs som ligger i html
