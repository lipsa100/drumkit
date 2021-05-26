var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0 ; i<noOfDrums; i++){

     document.querySelectorAll(".drum")[i].addEventListener("click",function(){


 var buttonInnerHTML = this.innerHTML;

makesound(buttonInnerHTML);
recentbutton(buttonInnerHTML);
});

}
      
   function makesound(key){
  switch (key){
        case "w":
//           var tom1 = new Audio("tom-1.mp3");
//           tom1.play();
            alert("Hello W");
        break;
        case "a":
//           var tom2 = new Audio("tom-2.mp3");
//           tom2.play();
            alert("Hello A");
        break;
        case "s":
//           var tom3 = new Audio("tom-3.mp3");
//           tom3.play();
            alert("Hello S");
        break;
        case "d":
//           var tom4 = new Audio("tom-4.mp3");
//           tom4.play();
            alert("Hello D");
        break;
        case "j":
//           var snare = new Audio("snare.mp3");
//           snare.play();
            alert("Hello J");
        break;
        case "k":
//           var crash = new Audio("crash.mp3");
//           crash.play();
            alert("Hello K");
        break;
        case "l":
//           var kick = new Audio("kick-bass.mp3");
//           kick.play();
            alert("Hello L");
        break; 
        default:
        alert("wrong entry");
        break;
      }
    });
  }
    
