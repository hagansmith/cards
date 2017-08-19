var text = document.getElementById('textInput');
var create = document.getElementById('createBtn');
var card = document.getElementById('card');
var cardArray = [];
var cardNum = 0;
	
//1. When the user enters in text into the text area and then clicks the create button, 
create.addEventListener('click',function(){	
	writeToArray(text.value);
	dynamicIds();
	deleteBtn();
})

//create a new card element in the DOM that includes it's own delete button.
function domString() {	
	for (var i = 0; i < cardArray.length; i++) {
	cardNum = i;
	var cardString = '';
	cardString += `<div class="cardElement" id="card_${i}">`
	cardString += `<p> ${cardArray[i]} </p>`
	cardString += `<button type="button" class="btn" id="delBtn_${i}">Delete</button>`
	cardString += `</div>`
	writeToDom(cardString);
	}	
}

function writeToArray(string) {
	cardArray.push(string)
	domString();
}

function writeToDom(string) {
	card.innerHTML += string;
}

//2. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. 
	//Not just made invisible, actually removed from the DOM.
function dynamicIds() {
	for(var j=0; j < cardArray.length; j++){
	//These variables must be defined as a part of the fuction as they dont exist at the page load and need to be executed only after the DOM string has been created.
	// console.log('card value in del Listener', cardNum);
	// console.log('value of the cardElement:', cardElement);
	var delCard = document.getElementById(`delBtn_${j}`);
	// console.log('value of the delCard:', delCard);
	// delCard.addEventListener('click', function(){	
 }
 delCard.addEventListener('click', deleteBtn);
}

function deleteBtn(e) {
console.log(e);
	card.removeChild(e.target.parentNode);
	
};

