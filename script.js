let button = document.querySelector("button")
let counterSpan = document.querySelector("span")
let everything = document.querySelector("div")
let counter = 0
button.onclick = function() {
    counter++
    counterSpan.textContent = counter
    if(counter === 1) { 
    let paragraph = document.createElement("p")
    paragraph.textContent = "Ok, so you clicked the button and nothing happened try to click the button a few more times"
    everything.appendChild(paragraph)
    }
  if(counter === 5) {
    let secondParagraph = document.createElement("p")
    secondParagraph.textContent = "almost there! click 5 more times"
    everything.appendChild(secondParagraph)    
  }
  if(counter === 10) {
    everything.style.display = "none"
    document.body.id = "background";
    let thirdParagraph = document.createElement("p")
    thirdParagraph.textContent = "congratulations! you clicked 10 times!"
    document.body.appendChild(thirdParagraph)    
  }
    

}