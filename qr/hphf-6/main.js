const inputs = document.querySelectorAll("input")
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("input", updateInputs)
}

function updateInputs(e) {
  console.log(e.target.name)
  inputs.forEach(input => {
    if (input.name === e.target.name){
      input.value = e.target.value
    }
  })
}

const button = document.querySelector("button")

button.addEventListener("click", () => {
  document.querySelector(".mad-input").innerHTML = `Louis screamed to Ari, "THIS IS NOT HOW YOU FUCKING LIVE!". 
  <br><br>
  Why did Louis scream to Ari like that you may ask? Well I will explain in vivid detail.
  <br><br>

  It started on the eve of Hyde Park Hi-Fest. Both Louis and Ari were so excited. They were jumping up and down, swinging their tongues all over the place. Yes, it was getting sloppy. What do you expect from two young and free adults? Inevitably they ran out of saliva, and so began the deep and meaningful phase of the night. 
  <br><br>

  Louis crept down to the floor. Cheeks glued to the wood. Ari followed suit, and placed his plump, juicy set of steaming buns onto the slightly creaking and well-endowed wood. There, they sat collecting their thoughts on what their true intentions were for the following night. Was it just for fun? Or was there a deeper meaning?
  <br><br>

  "Alright let's address the elephant in the room, Ari. Why have you been avoiding me?" Louis started with.
  <br><br>

  "Whaaaaat? I'm here right now, isn't that all that matters?" Ari replied.
  <br><br>

  "I appreciate your presence, Ari, but you can't deny it. It's been 4 years since I've seen you. I've messaged you everyday in those 4 years." Louis explained.
  <br><br>

  "And I'm here now! Doesn't that show you that I care about you now????" Ari retorted.
  <br><br>

  "NO. It makes it weirder that you finally responded. I had given up. You should have too. This is not right." Louis said, with a tear in their eye.
  <br><br>

  Ari stood up, ready to leave. Never had Ari felt so offended (even though Louis was objectively right). 
  <br><br>

  Louis, slowly but surely, stood up. Lifting his finger, pointing it directly at Ari, let out his famous words, "THIS IS NOT HOW YOU FUCKING LIVE!".`
})