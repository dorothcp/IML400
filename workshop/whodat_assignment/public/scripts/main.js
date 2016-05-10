/* ----- */
// Replace YOUR NAME with yours

var NAME = "Dorothy Peng";
console.log( "/*****************/\n" + NAME +"'s submission \nfor Whodat Assignment" + "\n/*****************/\n");



/*
 * CHALLENGES
 *
 * Complete as many of the following challenges 
 * that you can. Simply put your code where indicated
 * and when you have completed a challenge
 * the delete the not in the 'not completed' message
 * if you try and don't get it then change the log message to 
 * something else. (e.g. 'attempted', 'attempted but javascript stinks', 
 * 'attempted but the instructor stinks', ...)
 */




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch1											*/	
/*	Change the color of the wings on  			*/	
/*	1st owl to a different color				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 1...');

//paste your code here...and delete
var leftWing= document.getElementsByClassName("wing_L");
leftWing[0].style.backgroundColor= "red";


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch2											*/	
/*	Change the background color of the cage  	*/	
/*	on the 1st row at the end					*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 2...');
var cage3= document.getElementsByClassName("cage  column-4");
<<<<<<< HEAD
//cage3.setAttribute("style", "background-color: purple");
=======
>>>>>>> fa65be50a2234eb69e51e0349b7aa0e6527b59c3
cage3[2].style.backgroundColor= "green";
//var daCage= document.getElementsByClassName("cage")
//deCage[2].setAttribute("style", "background-color: white");
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch3											*/	
/*	Change the length of the beak for the owl	*/	
/*	at the end of the second row				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

/** 		HINT		 **/
// to change the length of the beak you need to change
// the pixel value of:
// border-top
// e.g.
// changing:
// border-top: 60px solid goldenrod;
// to
// border-top: 120px solid goldenrod;
// would double the length of the beak.
/** ---		----	---	 **/

console.log('...challenge 3...');
var beak= document.getElementsByClassName("beak");
beak[5].style.borderTop= "120px solid goldrenrod";
//elements, rightclick, copy selector
//document.querySelector( paste code).setAttribute("style","border-top: 120px solid magenta");




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch4											*/	
/*	Write a function that takes a number		*/	
/*  and returns the cage on the page that 		*/
/* 	corresponds to that number 					*/
/* 		e.g. calling 							*/
/*				getCage(0)						*/
/*		would return <section class="cage" ...	*/
/*					 </section>					*/
/*												*/					
/*				html Tag for the first cage     */					
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 4...');
function getCage(cageNumber) {
	var selectedCage= document.getElementsByClassName("cage  column-4");
	return selectedCage(cageNumber);
<<<<<<< HEAD
};
=======
}
>>>>>>> fa65be50a2234eb69e51e0349b7aa0e6527b59c3




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch5											*/	
/*	Change the colors of the cages and owls		*/	
/*	in the middle column to be the same			*/
/*												*/	
/*												*/	
/*  HINTkey: "value", 							*/
/*  If you got Ch4 then you should be able to 	*/
/* 	you should be able to use that function to 	*/
/*	assist you 									*/
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 5...');
//console.log('\tnot completed');
//paste your code here...
function changeColor (owlNum) {
	var cage= document.getElementsByClassName("cage  column-4");
	var body= document.getElementsByClassName("body prpl-d4");
	cage[owlNum].style.backgroundColor= "blue";
	body[owlNum].style.backgroundColor= "pink";
<<<<<<< HEAD
};
=======
}
>>>>>>> fa65be50a2234eb69e51e0349b7aa0e6527b59c3
changeColor(4);
changeColor(1);


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch6											*/	
/*	Write functions that take an owl element	*/	
/* 	as an argument and return the html sections */
/*	of different body parts						*/
/*												*/	
/*	see functions below for hints				*/	
/*												*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 6...');
//console.log('\tnot completed');
//paste your code here...

function getWings(anOwl) {
	var wingsL= document.getElementsByClassName("wing_L");
	var wingsR= document.getElementsByClassName("wing_R");
<<<<<<< HEAD
	return [wingsR[anOwl], wingsL[anOwl]];
};
getWings(3);

function getBeak(anOwl) {
	var beak= document.getElementsByClassName("beak");
	return beak[anOwl];
};
=======
	return [wingsR[anOwl], wingsL[anOwl];
}
getWings(3);

function getBeak(anOwl) {
	function getBeak (anOwl) {
	var beak= document.getElementsByClassName("beak");
	return beak[anOwl];
}
>>>>>>> fa65be50a2234eb69e51e0349b7aa0e6527b59c3

function getEyes(anOwl) {
	var eyeL= document.getElementsByClassName("eye_L");
	var eyeR= document.getElementsByClassName("eye_R");
<<<<<<< HEAD
	return [eyeR[anOwl], eyeL[anOwl]];
};
=======
	return [eyeR[anOwl], eyeL[anOwl];
}
>>>>>>> fa65be50a2234eb69e51e0349b7aa0e6527b59c3

function getBody(anOwl) {
	var body= document.getElementsByClassName("body prpl-d4");
	return body[anOwl];
<<<<<<< HEAD
};
=======
}
>>>>>>> fa65be50a2234eb69e51e0349b7aa0e6527b59c3

function getPupils(anOwl) {
	var pupil= document.getElementsByClassName("pupil");
	return [pupil[anOwl*2], pupil[anOwl*2+1]];
<<<<<<< HEAD
};
getPupils(5);
console.log("completed!");
=======
}
getPupils(5);

>>>>>>> fa65be50a2234eb69e51e0349b7aa0e6527b59c3

