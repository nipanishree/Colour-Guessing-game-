var numsquares=6;
var colours=generaterandomcolours(numsquares);
var squares=document.querySelectorAll(".square");
 var pickedcolour=pickcolour();
  var displaycolour=document.getElementById("displaycolour"); 
  var message=document.querySelector("#message");
  displaycolour.textContent =pickedcolour;
  var easybtn=document.querySelector("#easybtn");
  var hardbtn=document.querySelector("#hardbtn");

  easybtn.addEventListener("click",function(){
         easybtn.classList.add("selected");
         hardbtn.classList.remove("selected");
         numsquares=3;
          colours=generaterandomcolours(numsquares);
          pickedcolour=pickcolour();
          displaycolour.textContent =pickedcolour;
          for(var i=0;i<squares.length;i++){
          	if(colours[i]){
          		   squares[i].style.background=colours[i];
          	} else{
          		squares[i].style.display="none";
          	}
          
          }

  });
  hardbtn.addEventListener("click",function(){
  	easybtn.classList.remove("selected");
         hardbtn.classList.add("selected");
         numsquares=6;
         colours=generaterandomcolours(numsquares);
          pickedcolour=pickcolour();
          displaycolour.textContent =pickedcolour;
          for(var i=0;i<squares.length;i++){
          	 squares[i].style.background=colours[i];
          squares[i].style.display="block";
          	}
          
     });


  var h1=document.querySelector("h1");
  var resetbutton=document.querySelector("#reset");

  resetbutton.addEventListener("click",function(){
      colours=generaterandomcolours(numsquares);
      pickedcolour=pickcolour();
      displaycolour.textContent =pickedcolour;
      for(var i=0;i<squares.length;i++){
      	squares[i].style.background=colours[i]; 
      }
      h1.style.background="steelblue";


  });


 for(var i=0;i<squares.length;i++){
 	squares[i].style.background=colours[i]; 

 	 squares[i].addEventListener("click",function(){
      var clickedcolour=this.style.background;
      if(clickedcolour==pickedcolour){
      	message.textContent="Correct";
      	changecolour(clickedcolour);
      	resetbutton.textContent="Play Again?"; 
      	h1.style.background=clickedcolour;
      } else{
      	this.style.background="#232323";
      	message.textContent="Try Again";

      }
 	});
 } 

 function changecolour(colour){
 	for(var i=0;i<squares.length;i++){
           squares[i].style.background=colour;
 	}
 }

 function pickcolour(){
 	var random=Math.floor(Math.random() * colours.length);
 	return colours[random];
 }

 function generaterandomcolours(num){
 	var arr=[];
 	for(var i=0;i<num;i++){
      arr.push(random());
 	}
 	return arr;
 }
 function random(){
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
 }
 
 