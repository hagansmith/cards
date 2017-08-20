var text = document.getElementById('textInput');
var create = document.getElementById('createBtn');
var card = document.getElementById('card');
var cardArray = [];
	
//1. When the user enters in text into the text area and then clicks the create button, 
create.addEventListener('click',function(){	
	writeToArray();
	domString();
	dynamicId();
})

// Take the value of the input field and push into array, call the domString function
function writeToArray() {
	cardArray.push(text.value);

}

//create a new card element in the DOM that includes it's own delete button.
function domString() {	
	for (var i = 0; i < cardArray.length; i++) {
	var cardString = '';
	var newCard = '';
	newCard += `<div class="cardElement" id="card_${i}">`
	newCard += `<p> ${cardArray[i]} </p>`
	newCard += `<button type="button" class="btn" id="delBtn_${i}">Delete</button>`
	newCard += `</div>`
	cardString += newCard;
	}	
	writeToDom(cardString);
}

function writeToDom(string) {
	card.innerHTML += string;

}

//2. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. 
	//Not just made invisible, actually removed from the DOM.
function dynamicId() {
	for(var j=0; j<cardArray.length; j++){
	//These variables must be defined as a part of the fuction as they dont exist at the page load and need to be executed only after the DOM string has been created.
	var delCard = `delBtn_${j}`;
	console.log('value of the delCard:', delCard);
	// delCard.addEventListener('click', function(){	
 document.getElementById(delCard).addEventListener('click', deleteBtn);
 } 
}

function deleteBtn(e) {
	console.log(e);
	card.removeChild(e.currentTarget.parentNode);
	
}

