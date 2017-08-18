var text = document.getElementById('textInput');
var create = document.getElementById('createBtn');
var card = document.getElementById('card');
var cardArray = [];
var cardNum = 0;
	
//1. When the user enters in text into the text area and then clicks the create button, 
create.addEventListener('click',function(){	
	domString(text);
	delListener();
})
//create a new card element in the DOM that includes it's own delete button.
function domString(card) {	
	cardNum + 1;
	var cardString = '';
	cardString += `<div class="cardElement" id="card_${cardNum}">`
	cardString += `<p> ${card.value} </p>`
	cardString += `<button type="button" class="btn" id="delBtn_${cardNum}">Delete</button>`
	cardString += `</div>`
	cardNum ++
	writeToArray(cardString);
	return cardNum;
}


function writeToArray(string) {
	cardArray += string
	writeToDom(string)
}

function writeToDom(string) {
	card.innerHTML += string;
}

//2. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. 
	//Not just made invisible, actually removed from the DOM.
function delListener() {
	//These variables must be defined as a part of the fuction as they dont exist at the page load and need to be executed only after the DOM string has been created.
	var cardElement = document.getElementsById('cardElement');
	console.log('value of the cardElement:', cardElement);
	var delCard = document.getElementsById('btn');
	console.log('value of the delCard:', delCard);
	delCard.addEventListener('click', function(){
 		card.removeChild(cardElement);
 	})
 }