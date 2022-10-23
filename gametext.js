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
          text: 'You murderous scumbag! you have killed some of my best men, drop your weapon!.',
          options: [
            {
              text: 'Wait a moment, let me explain',
              nextText: 6
            },
            {
              text: 'Youll never take me alive!',
              nextText: 4
            },
      
            {
              text: 'I enjoyed killing them too',
              nextText: 8
            },
            {
              text: 'Im so sorry but I needed the money',
              nextText: 10
            },
            {
              text: 'Maybe we can work something out?',
              setState: { RightOne: true },
              nextText: 2
            }
          ]
        },
        
        {
          id: 2,
          text: 'Like what? what could you possibly offer us?',
          options: [
            {
              text: 'Well there is a lot of money in this bag. Around 1.5 million',
              nextText: 7,
            },
            {
              text: 'I can offer you the opportunity to get out of my way or die!',
              nextText: 4
            },
            {
              text: 'Fuck this im out of here!',
              nextText: 11
            },
            {
              text: 'Please! im begging you just let me go',
              nextText: 3
            },
           
          ]
        },
        
        {
          id: 3,
          text: 'You really are a piece of work. What do I tell their families ',
          options: [
            {
              text: 'Thats not my problem. Thats your job',
              nextText: 4
            },
            {
              text: 'Send my regards, now get the fuck out of my way!',
              nextText: 5
            },
            {
              text: 'I have some money?',
              nextText: 7
            },
            {
              text: 'I dont know, what would you have me do?',
              nextText: 13
            },
            {
              text: 'I dont trust you and I dont like how this is going ',
              nextText: 13
            }
           
          ]
        },
        
        {
          id: 4,
          text: 'You fought the law and the law won.',
          options: [
            {
              text: 'You atempt to fire your weapon and it jams. Its over',
              nextText: -1
            }
          ]
        },
        
        {
          id: 5,
          text: 'You insenstive asshole! Take him down guys',
          options: [
            {
              text: '',
              nextText: -1
            }
          ]
        },
        {
          id: 6,
          text: 'Explain, how do you explain what you have done? All this killing',
          options: [
            {
              text: 'Ok, give me the chance to make it right. I may have something to offer',
              nextText: 2
            },
            {
              text: 'An there will be even more death if you dont get out of my way',
              nextText: 7
            },
            {
              text: 'Well if they didnt get in my way. They would still be alive',
              nextText: 3
            },
            {
              text: 'Its true, there is enough death for one day',
              nextText: 7
            }

          ]
        },
        {
          id: 7,
          text: 'Are you actually attempting to bribe an officer of the law?.',
          options: [
            {
              text: 'Im just saying there is a lot of money in this bag',
              nextText: 13
            },
            {
              text: 'How about I give you 5k each and you let me go',
              
              nextText: 14
            },
            {
              text: 'Fuckoff! This money is all mine! Now Die!',
             
              nextText: 4
            },
            {
              text: 'As if I would do such a thing',
              
              nextText: 3
            }
          ]
        },
        {
          id: 8,
          text: 'Oh really? You enjoy killing? Thanks for making this easy for me. Take him down guys!.',
          options: [
            {
              text: 'Hang on! Hang on! Maybe we can work something out?',
              nextText: 2
            },
            {
              text: 'They shouldnt gotten in my way',
              nextText: 4
            },
            {
              text: 'Prepare to die!',
              nextText: 9
            },
            {
              text: 'Death is just part of life',
              nextText: 3
            }
          ]
        },
        {
          id: 9,
          text: 'You aim your weapon at the law but your to slow. You have been shot Once in the arm, twice in the chest and once in the head. You slip out of consciousness and see a dark tunnal followed by a flash of light and the faces of the people you have killed. Judgement awaits! Its over',
          options: [
            {
              text: 'Try again',
              nextText: -1
            }
          ]
        },
        {
          id: 10,
          text: 'You needed the money? You know I have been on the force for over 20 years and I barley afford to put my two daughters in college. I dont rob banks though!',
          options: [
            {
              text: 'Sounds like you need some help. Lets work something out?',
              nextText: 13
            },
            {
              text: 'Thats not my problem. Save me your sob story',
              nextText: -1
            },
            {
              text: 'Well if you want to make it to retirement. I suggest you step aside',
              nextText: 9
            },
            {
              text: 'Yeah, I needed the money and this bank has a lot of it',
              nextText: 3
            },
            {
              text: 'Thats a long time in the force. Whats your story?',
              nextText: 12
            }
          ]
        },
        
        {
          id: 11,
          text: 'You tried to take off running with the money. You forgot that bullets are faster the people. Its over',
          options: [
            {
              text: 'Try again.',
              nextText: -1
            }
          ]
        },

        {
          id: 12,
          text: 'My story? what do you care? I have been on the force for over 20 years now. I cant offered to put my daugters through college and my wife hates me.',
          options: [
            {
              text: 'Ive heard enough, get out of my way.',
              nextText: 4
            },
            {
              text: 'Look ts been a long day. How about we make a deal?.',
              nextText: 13
            },
            {
              text: 'You take off running with the money.',
              nextText: 11
            },
            {
              text: 'You take off running without the money.',
              nextText: -1
            }
          ]
        },
        {
          id: 13,
          text: 'It sounds like you wanna give us a cut of that money.',
          options: [
            {
              text: 'Offer 20k each to all three officers.',
              nextText: 14,
            },
            {
              text: 'Offer 100k each to all three officers.',
              nextText: 15,
            },
            {
              text: 'Offer 250k each to all three officers.',
              nextText: 16,
            },
            {
              text: 'You open fire.',
              nextText: 9,
            },
            {
              text: 'You take off running with the money.',
              nextText: -1,
            },
            {
              text: 'You take off running without the money.',
              nextText: -1,
            }
          ]
        },
        {
          id: 14,
          text: 'You cheap bastered! The officer becomes enraged with anger.',
          options: [
            {
              text: 'The officer lands a flush one on your jaw. You take it an attemmpt to renegotiate',
              nextText: 13,

            },

            {
              text: 'The officer lands a flush one on your jaw. But no one hits you and gets away with it. You aim your weapon.',
              nextText: 9,
            },
                        
          ]
        },
        
        {
          id: 15,
          text: 'The officers look pleased with the offer.',
          options: [
            {
              text: 'You hand over the money and take your cut of 1.2 million and walk away free',
              nextText: 20,

            },

            {
              text: 'You hand over the money and take your cut of 1.2 million while sneakily reaching for your hidden hand gun.',
              nextText: 9,
            },
                        
          ]
        },

        {
          id: 16,
          text: 'The officers look very pleased with the offer.',
          options: [
            {
              text: 'You hand over the money and take your cut of 750k and walk away free',
              nextText: 19,

            },

            {
              text: 'You hand over the money and take your cut of 750k while sneakily reaching for your hidden hand gun.',
              nextText: 17,
            },
                        
          ]
        },

        {
          id: 17,
          text: 'The officers are so exited by the 750k you gave them. They did not notice you reaching for your hand gun. You quickly open fire killing all three officers.',
          options: [
            {
              text: 'You approach the dead officers and take your money back',
              nextText: 18,

            },

            {
              text: 'You have run away with the money you have as its just to risky',
              nextText: 19,

            },
                        
          ]
        },

        {
          
          // Alternate ending (1)
          id: 18,
          text: 'You truly are remarkable. With your astonishing manipulation tactics and cunning master mind. Not only have you gotten away with multiple muders. But you got away with all the money too. You really outsmarted those guys and why wouldnt of you? Your clearly more intelligent. Well done, you won!.',
          options: [
            {
              text: 'You won!',
              //nextText: -1,
            },
          ]
        },

        {
          
          // Alternate ending (2)
          id: 19,
          text: 'You got away with the money and your safe. Hovever, you still left 750k behind and you cant help but feel that things could of been better',
          options: [
            {
              text: 'You won!',
              nextText: -1
            },
          ]
        },

        {
          
          // Alternate ending (3)
          id: 20,
          text: 'The officers become angry with your lowball offer and end up taking 1.4 million which leaves you with a 100k. They also threaten your life and tell you to back off. On a positive note your a 100k up and perhaps things could of been better.',
          options: [
            {
              text: 'You won!',
              nextText: -1,
            },
          ]
        }
      ]
 startGame()
      
     
    
