//your JS code here. If required.
const inputCode= document.querySelectorAll(".code");
inputCode.forEach((input,index)=>{
	input.addEventListener("input",(e)=>{
		const value=e.target.value;
		if(value&&index<inputCode.length-1){
			inputCode[index+1].focus();
		}
	});
	input.addEventListener("keydown",(e)=>{
		if(e.key==="Backspace") {if(!e.target.value && index>0){
			inputCode[index-1].focus();
		}}
	});
});