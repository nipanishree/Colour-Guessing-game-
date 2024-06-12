var butt=document.querySelector("button");
var full=true;
butt.addEventListener("click",function(){
	if(full){
		document.body.style.background="purple";
			 }
		else {
			document.body.style.background="orange";
			
		}
		full=!full;
		
	
});