function check()
{
	var question1= document.quiz.question1.value;
	var question2= document.quiz.question2.value;
	var question3= document.quiz.question3.value;
	var question4= document.quiz.question4.value;
	var question5= document.quiz.question5.value;
	var correct=0;
	
	if (question1== "1757"){
		correct++;
	}
		if (question2== "Buddhists"){
		correct++;
	}
		if (question3== "Cornwallis"){
		correct++;
	}
		if (question4== "Telugu"){
		correct++;
	}
		if (question5== "finance"){
		correct++;
	}
	
	var messages=["great job!","that is just ok","you need to do better"];
	var pictures = ["img/win.gif","img/meh.gif","img/loss.gif"];
	var range;
	 
	 if(correct<=1)
	 {
		 range=2;
	 }
	
 	if(correct>1 && correct<=3)
	{
		 range=1;
	 }
	 if(correct>=4) 
	 {
		 range=0;
	 }
		 
	
	
	
	document.getElementById("after_submit").style.visibility="visible";
	
	document.getElementById("message").innerHTML= messages[range];
	document.getElementById("number_correct").innerHTML="you got" + correct + "correct.";
	document.getElementById("picture").src= pictures[range];
	
}