var square1
var square2
var square3
var square4
var square5
var square6
var square7
var square8
var square9

var moves = 0

var IDs =["square1", "square2","square3", "square4","square5", "square6","square7", "square8","square9"];


function clicker(id) {



if (moves==0 || moves==2 || moves%2== 0){
	document.getElementById(id).innerHTML="X"
	

}

else document.getElementById(id).innerHTML="O"

document.getElementById(id).onclick=null
	
moves++

if (moves == 9) {
		userX();
		document.getElementById("h1").innerHTML="IT IS A DRAW!"
		unclick()

	}

userX()

}


function state() {

square1 = document.getElementById("square1").innerHTML
square2 = document.getElementById("square2").innerHTML
square3 = document.getElementById("square3").innerHTML
square4 = document.getElementById("square4").innerHTML
square5 = document.getElementById("square5").innerHTML
square6 = document.getElementById("square6").innerHTML
square7 = document.getElementById("square7").innerHTML
square8 = document.getElementById("square8").innerHTML
square9 = document.getElementById("square9").innerHTML

}

function userX(){

	state();

	if (square1 == "X" && square2 =="X" && square3 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()

		
	}

	if (square4 == "X" && square5 =="X" && square6 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}

	if (square7== "X" && square8 =="X" && square9== "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}


	if (square1 == "X" && square5 =="X" && square9 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}

	if (square1 == "X" && square4 =="X" && square7 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}
	if (square2 == "X" && square5 =="X" && square8== "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}
	if (square3 == "X" && square6 =="X" && square9 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()

	}

	if (square7 == "X" && square5 =="X" && square3 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}


	userO()



}

function userO(){


	if (square1 == "O" && square2 =="O" && square3 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()
	}


	if (square4 == "O" && square5 =="O" && square6 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}

	if (square7== "O" && square8 =="O" && square9== "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()
	}

	if (square1 == "O"&& square5 =="O" && square9 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}

	if (square1 == "O" && square4 =="O" && square7 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}
	if (square2 == "O" && square5 =="O" && square8== "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()
		
	}
	if (square3 == "O"&& square6 =="O"&& square9 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}

	if (square7 == "O" && square5 =="O" && square3 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}
	

	


}


function unclick(){
	for (var i = 1; i <10; i++) {
		document.getElementById("square" + i).onclick =null
	};
}


function restart(){

	location.reload()

}

