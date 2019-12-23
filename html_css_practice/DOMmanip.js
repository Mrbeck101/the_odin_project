//essential creates the tags within the document without adding them to the page yet
const container = document.querySelector('#container'); //sets a const for the container ID
const body1 = document.querySelector('#b1');
const paragraph = document.createElement('p'); //creates the <p> tag under the constant paragraph
const header3 = document.createElement('h3'); //creates the <h3> tag under the constant header3
const div2 = document.createElement('div');
const header1 = document.createElement('h1');
const paragraph2 = document.createElement('p');
var btn1 = document.querySelector('#btn');

//adds any class or ID wanted
div2.id = "div2";
header3.classList.add('bluhead'); //adds a class to the header3 h3 tag
paragraph.classList.add('paragraph'); //adds a class to the <p> tag


//edits text and style choices
paragraph.textContent = "Hey I'm Red"; //adds text to the paragraph
header3.textContent = "I'm a blue h3!"; //adds text to the header constant header3
header1.textContent = "I'm in a  div";
paragraph2.textContent = "ME TOO!";

div2.style.backgroundColor = "pink";
div2.style.borderWidth = "2px 5px 2px 5px";
div2.style.borderStyle = "solid";
div2.style.borderColor = "black";

paragraph.style.color = "red"; //sets color to red
header3.style.color = "blue";


//adds the const underneath its desired area in the HTML document
container.appendChild(header3);
container.appendChild(paragraph); //assigns that paragraph as a child to the container
b1.appendChild(div2);
div2.appendChild(header1);
div2.appendChild(paragraph2);

//Events

//btn1.onclick = () => alert("hello World"); //this method does work, however it only allows for one event listener to be on at a time such as on click.
btn1.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});