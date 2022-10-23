const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

// show text node function 
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  
  // array for this function
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

// start game function
function startGame() {
  state = {}
  showTextNode(1)
}

// show options function
function showOption(option){
 return option.requiredState == null || option.requiredState(state)
}

// select option, next text function
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }

  // set question assign state. this means that if we decide to pick a certain question. then some other questions may not be visible to us
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

// if the player dialogue is less than 1. then we hide the dialogue
setInterval(function(){
  if(playerDialogue <2){
    var x = document.getElementById("option-buttons");

      x.style.visibility = "hidden";
    } 
})

// if the player dialogue value is more than 1. then dialogue will be available
setInterval(function(){
    if(playerDialogue > 1){
  var x = document.getElementById("option-buttons");
      
    x.style.visibility = "visible";
      
   }   
})
    
// this is the most important part of this module because this is the in game dialogue
const textNodes = [
  {
          
    id: 1,
    text: '',
    options: [
      {
        text: 'Dialogue is available',
        nextText: 1.1 
      },
    ]
  },
  
  {
          
          id: 1.1,
          text: 'Option 1.',
          options: [
            {
              text: 'Red',
              nextText: 1
            },
            {
              text: 'Blue',
              nextText: 3
            },
      
          ]
        },
        
        {
          id: 2,
          text: 'You picked blue?',
          options: [
            {
              text: 'Play again',
              nextText: 1,
            },
            
           
          ]
        },
        
        {
          id: 3,
          text: 'You picked red? ',
          options: [
            {
              text: 'Play again',
              nextText: 1
            },
            
          ]
        },
        
      ]
 startGame()
      
     
    
