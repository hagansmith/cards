# cards

## Synopsis

The cards exercise is an individual exercise in using Javascript to dynamically manipulate the DOM.

## What to expect

User can input text and submit. Text is written to the DOM dynamically in card style along with a delete button to delete just that card.

![DEMO](https://github.com/hagansmith/cards/blob/master/CARDS.gif)
## Project Requirements
1. Create an HTML page that contains a text area and a button labeled *Create*.
1. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
1. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.

### How to run (Node must be installed on your machine):
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

```
git clone git@github.com:hagansmith/cards.git
cd cards
npm install http-server -g
hs -c-1
```
Navigate to: http://localhost:8080
