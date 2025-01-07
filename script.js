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
		 if (e.key === "Backspace") {
      // Always focus on the previous input and clear it
       if (index > 0) {
		   inputCode[index].value = "";
        inputCode[index - 1].focus(); // Move focus to the previous input
         // Clear the previous input
      } else {
		   inputCode[index].value = "";
        e.target.value = ""; // Clear the current input if it's the first one
      }}

	});
});
