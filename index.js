

function scuberGreetingForFeet(somevalue){
 let message;
  if (somevalue <= 400){
    message = 'This one is on me!';
    
  } else if (somevalue >= 400 && somevalue <= 2000){
    message = 'That will be twenty bucks.';
    
  } else if (somevalue > 2000 && somevalue <2500){
    message = 'I will gladly take your thirty bucks.';
    } else if (somevalue >2500){
      message = 'No can do.'
    }
    return message
}


function ternaryCheckCity(someCity){
  return (someCity == 'NYC'? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){
  let message;
  switch(tip){
    case ('generous'):
      return message = 'Thank you so much.';
    case ('not as generous'):
      return message = 'Thank you.';
    case ('thanks for everything'):
      return message = 'Bye.'; 
}

}

