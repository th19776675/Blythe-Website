const email = document.querySelector("[name='email']");

// console.log(nameInput)

const formSubmit = document.querySelector("#submit-form")

formSubmit.addEventListener("click", function(event){
  event.preventDefault()
  if (!email.value) {
    alert("Fill in all fields babe!")
    return
  }

  const data = new FormData(document.getElementById('email-form'));
  const api = `https://script.google.com/macros/s/AKfycbz7k26UUt26oiCmXPRFUgvj_6hbSe7mhpMN7Uc9eZJloldeqcnB6gfJPk25B1Eb0bpltA/exec`
  // const api = `test`

  // Loader
  const siteWrapper = document.querySelector(".outer-wrapper")
  siteWrapper.classList.add("blur");
  const loadingWrapper = document.querySelector(".loading-wrapper")
  const blockLeft = document.createElement('div')
  blockLeft.classList.add("block")
  blockLeft.classList.add("left")
  const blockMiddle = document.createElement('div')
  blockMiddle.classList.add("block")
  blockMiddle.classList.add("middle")
  const blockRight = document.createElement('div')
  blockRight.classList.add("block")
  blockRight.classList.add("right")

  loadingWrapper.appendChild(blockLeft)
  loadingWrapper.appendChild(blockMiddle)
  loadingWrapper.appendChild(blockRight)

  fetch(api, {
    method: "POST",
    body: data
  }).then((response) => {
    console.log(`Sucesss | ${response}`)
    siteWrapper.classList.remove("blur");
    loadingWrapper.innerHTML = ""
    alert("ALL DONE BABE.")
    email.value = ""
  }).catch((error) => {
    console.log(`Error | ${error}`)
    siteWrapper.classList.remove("blur");
    loadingWrapper.innerHTML = ""
    alert("Something went wrong!")
  })
})
