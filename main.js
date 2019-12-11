function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	
	var correct = 0;
	
// ! Question 1 
if (question1 == "Honestly" || question1 == "honestly" ) {
	document.getElementById("textbox1").style.color = "green";
	correct++;	
} else {
	document.getElementById("textbox1").style.color = "red";
};

// ! Question 2 
if (question2 == "Code" || question2 == "code") {
	document.getElementById("textbox2").style.color = "green";
	correct++;
} else {
	document.getElementById("textbox2").style.color = "red";
};

// ! Question 3 
if (question3 == "Integrity" || question3 == "integrity") {
	document.getElementById("textbox3").style.color = "green";
	correct++;		
}   else {
	document.getElementById("textbox3").style.color = "red";
}

// ! Question 4 	
if (question4 == "Everyone" || question4 == "everyone") {
	document.getElementById("textbox4").style.color = "green";
	correct++;		
}	else {
	document.getElementById("textbox4").style.color = "red";
}

// ! Question 5 
if (question5 == "Retaliation" || question5 == "retaliation") {
	document.getElementById("textbox5").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox5").style.color = "red";	
}

// ! Question 6 
if (question6 == "Ethics" || question6 == "ethics") {
	document.getElementById("textbox6").style.color = "green";
	correct++;		
	} else {
	document.getElementById("textbox6").style.color = "red";	
}	

// ! Question 7 
if (question7 == "Tolerate" || question7 == "tolerate") {
	document.getElementById("textbox7").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox7").style.color = "red";	
}
	
// ! Question 8 
if (question8 == "Safety" || question8 == "safety") {
	document.getElementById("textbox8").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox8").style.color = "red";	
}

// ! Question 9 
if (question9 === "Raise It" || question9 === "RaiseIt" || question9 === "raise it") {
	document.getElementById("textbox9").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox9").style.color = "red";
}

// ! Question 10 
if (question10 == "Environmental" || question10 == "environmental") {
	document.getElementById("textbox10").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox10").style.color = "red";
}

// ! Question 11 
if (question11 == "Responsibility" || question11 == "responsibility") {
	document.getElementById("textbox11").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox11").style.color = "red";
}
	
// ! Question 12 
if (question12 == "Best" || question12 == "best") {
	document.getElementById("textbox12").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox12").style.color = "red";
}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

document.getElementById("formSubmission")
	if (correct === 12) {
		formSubmission.style.display= "block";
		console.log("working");
	}

}


