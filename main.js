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

	let question1Trim = question1.trim(); 
	let question2Trim = question2.trim(); 
	let question3Trim = question3.trim(); 
	let question4Trim = question4.trim(); 
	let question5Trim = question5.trim(); 
	let question6Trim = question6.trim(); 
	let question7Trim = question7.trim(); 
	let question8Trim = question8.trim(); 
	let question9Trim = question9.trim(); 
	let question10Trim = question10.trim(); 
	let question11Trim = question11.trim(); 
	let question12Trim = question12.trim();
	
	var correct = 0;
	
// ! Question 1 
if (question1Trim === "Honestly" || question1Trim === "honestly" || question1Trim === "HONESTLY") {
	document.getElementById("textbox1").style.color = "green";
	correct++;	
	console.log(question1Trim.length);	
	
} else {
	document.getElementById("textbox1").style.color = "red";
};

// ! Question 2 
if (question2Trim == "Code" || question2Trim == "code" || question2Trim === "CODE") {
	document.getElementById("textbox2").style.color = "green";
	correct++;
	console.log(question2Trim.length);
} else {
	document.getElementById("textbox2").style.color = "red";
};

// ! Question 3 
if (question3Trim == "Integrity" || question3Trim == "integrity" || question3Trim === "INTEGRITY") {
	document.getElementById("textbox3").style.color = "green";
	correct++;	
	console.log(question3Trim.length);	
}   else {
	document.getElementById("textbox3").style.color = "red";
}

// ! Question 4 	
if (question4Trim == "Everyone" || question4Trim == "everyone" || question4Trim === "EVERYONE") {
	document.getElementById("textbox4").style.color = "green";
	correct++;
	console.log(question4Trim.length);		
}	else {
	document.getElementById("textbox4").style.color = "red";
}

// ! Question 5 
if (question5Trim == "Retaliation" || question5Trim == "retaliation" || question5Trim === "RETALIATION") {
	document.getElementById("textbox5").style.color = "green";
	correct++;	
	console.log(question5Trim.length);	
} else {
	document.getElementById("textbox5").style.color = "red";	
}

// ! Question 6 
if (question6Trim == "Ethics" || question6Trim == "ethics" || question6Trim === "ETHICS") {
	document.getElementById("textbox6").style.color = "green";
	correct++;	
	console.log(question6Trim.length);	
	} else {
	document.getElementById("textbox6").style.color = "red";	
}	

// ! Question 7 
if (question7Trim == "Tolerate" || question7Trim == "tolerate" || question7Trim === "TOLERATE") {
	document.getElementById("textbox7").style.color = "green";
	correct++;	
	console.log(question7Trim.length);	
} else {
	document.getElementById("textbox7").style.color = "red";	
}
	
// ! Question 8 
if (question8Trim == "Safety" || question8Trim == "safety" || question8Trim === "SAFETY") {
	document.getElementById("textbox8").style.color = "green";
	correct++;	
	console.log(question8Trim.length);	
} else {
	document.getElementById("textbox8").style.color = "red";	
}

// ! Question 9 
if (question9Trim === "Raise It" || question9Trim === "RaiseIt" || question9Trim === "raise it" || question9Trim === "RAISE IT" || question9Trim === "RAISEIT" || question9Trim === "Raise it") {
	document.getElementById("textbox9").style.color = "green";
	correct++;	
	console.log(question9Trim.length);	
} else {
	document.getElementById("textbox9").style.color = "red";
}

// ! Question 10 
if (question10Trim == "Environmental" || question10Trim == "environmental" || question10Trim === "ENVIRONMENTAL") {
	document.getElementById("textbox10").style.color = "green";
	correct++;		
	console.log(question10Trim.length);
} else {
	document.getElementById("textbox10").style.color = "red";
}

// ! Question 11 
if (question11Trim == "Responsibility" || question11Trim == "responsibility" || question11Trim === "RESPONSIBILITY") {
	document.getElementById("textbox11").style.color = "green";
	correct++;	
	console.log(question11Trim.length);	
} else {
	document.getElementById("textbox11").style.color = "red";
}
	
// ! Question 12 
if (question12Trim == "Best" || question12Trim == "best" || question12Trim === "BEST") {
	document.getElementById("textbox12").style.color = "green";
	correct++;	
	console.log(question12Trim.length);	
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

