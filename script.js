var script = document.createElement('script');
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const messages = ["Today is a good day to eat peas :)", "What's your favorite type of duck? I like mallards.", "You got this! ", "Can't think of a good pun :(", "If you can dream it, you can do it!", "Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential. Concern yourself not with what you tried and failed in, but with what it is still possible for you to do.", "i like sandwiches", "quack!!!, quack!!!, quack!!!"];

const hats = ["hat1.png", "hat2.png", "hat3.png", "hat4.png", "hat5.png", "hat6.png"];

$(document).ready(generateMessage());

function generateMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  document.getElementById("message").innerHTML = randomMessage;
  randomIndex = Math.floor(Math.random() * hats.length);
  document.getElementById("hats").src = hats[randomIndex];
}


