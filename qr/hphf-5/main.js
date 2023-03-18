const contact = document.querySelector("[name='contact']");
const name1 = document.querySelector("[name='name1']");
const name2 = document.querySelector("[name='name2']");

// console.log(nameInput)

const formSubmit = document.querySelector("#submit-form")

formSubmit.addEventListener("click", function(event){
  event.preventDefault()
  if (!contact.value || !name1.value || !name2.value) {
    alert("Fill in all fields babe!")
    return
  }

  const data = new FormData(document.getElementById('form'));
  const api = `https://script.google.com/macros/s/AKfycbwaY65WqVqxrZRjSUFxC1AQLMg61D3de9Iz5M-XqoT6XJ9ZvOKXDKydNw75bMZJIdOxDw/exec`
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
    contact.value = ""
    name1.value = ""
    name2.value = ""
  }).catch((error) => {
    console.log(`Error | ${error}`)
    siteWrapper.classList.remove("blur");
    loadingWrapper.innerHTML = ""
    alert("Something went wrong!")
  })
})
