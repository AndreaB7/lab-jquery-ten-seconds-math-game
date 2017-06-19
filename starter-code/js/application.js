// Use this file to write the interactions between your game and the user

//Initialize ion library

// permite cargar el html y luego ejecutar javascript
window.onload = function(){
  var button = document.querySelector('button');
  button.onclick = function(){
    var gameOptions = document.querySelector(".game-options");
    gameOptions.hide();
  };

};
