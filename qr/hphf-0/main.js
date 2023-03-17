const headlineTitles = document.querySelectorAll(".headline-title img")

for (let i = 0; i < headlineTitles.length; i++) {
  const title = headlineTitles[i];
  title.style.animation = `animated ${(i*0.1)+1}s linear 5`
}

const splashButton = document.querySelector(".splash-button")
const splash = document.querySelector(".splash")

splashButton.addEventListener("click", ()=> {
  splash.style.display = "none"
})