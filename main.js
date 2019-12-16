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
if (question1 === "Honestly" || question1 === "honestly" || question1 === "HONESTLY") {
	document.getElementById("textbox1").style.color = "green";
	correct++;	
} else {
	document.getElementById("textbox1").style.color = "red";
};

// ! Question 2 
if (question2 == "Code" || question2 == "code" || question2 === "CODE") {
	document.getElementById("textbox2").style.color = "green";
	correct++;
} else {
	document.getElementById("textbox2").style.color = "red";
};

// ! Question 3 
if (question3 == "Integrity" || question3 == "integrity" || question3 === "INTEGRITY") {
	document.getElementById("textbox3").style.color = "green";
	correct++;		
}   else {
	document.getElementById("textbox3").style.color = "red";
}

// ! Question 4 	
if (question4 == "Everyone" || question4 == "everyone" || question4 === "EVERYONE") {
	document.getElementById("textbox4").style.color = "green";
	correct++;		
}	else {
	document.getElementById("textbox4").style.color = "red";
}

// ! Question 5 
if (question5 == "Retaliation" || question5 == "retaliation" || question5 === "RETALIATION") {
	document.getElementById("textbox5").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox5").style.color = "red";	
}

// ! Question 6 
if (question6 == "Ethics" || question6 == "ethics" || question6 === "ETHICS") {
	document.getElementById("textbox6").style.color = "green";
	correct++;		
	} else {
	document.getElementById("textbox6").style.color = "red";	
}	

// ! Question 7 
if (question7 == "Tolerate" || question7 == "tolerate" || question7 === "TOLERATE") {
	document.getElementById("textbox7").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox7").style.color = "red";	
}
	
// ! Question 8 
if (question8 == "Safety" || question8 == "safety" || question8 === "SAFETY") {
	document.getElementById("textbox8").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox8").style.color = "red";	
}

// ! Question 9 
if (question9 === "Raise It" || question9 === "RaiseIt" || question9 === "raise it" || question9 === "RAISE IT" || question9 === "RAISEIT" || question9 === "Raise it") {
	document.getElementById("textbox9").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox9").style.color = "red";
}

// ! Question 10 
if (question10 == "Environmental" || question10 == "environmental" || question10 === "ENVIRONMENTAL") {
	document.getElementById("textbox10").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox10").style.color = "red";
}

// ! Question 11 
if (question11 == "Responsibility" || question11 == "responsibility" || question11 === "RESPONSIBILITY") {
	document.getElementById("textbox11").style.color = "green";
	correct++;		
} else {
	document.getElementById("textbox11").style.color = "red";
}
	
// ! Question 12 
if (question12 == "Best" || question12 == "best" || question12 === "BEST") {
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
	}
}


//TODO: Answers:
//* 1 Honestly
//* 2 Code
//* 3 Integrity
//* 4 Everyone
//* 5 Retaliation
//* 6 Ethics
//* 7 Tolerate
//* 8 Safety
//* 9 Raise It
//* 10 Environmental
//* 11 Responsibility
//* 12 Best

