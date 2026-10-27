console.log("Javascript fungerar!");

async function loadCV() {
  const response = await fetch("./data/cv.json");
  const data = await response.json();

  console.log(data.workExperience);
}

loadCV();
