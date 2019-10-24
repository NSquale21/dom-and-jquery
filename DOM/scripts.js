let button = document.createElement('button');
button.className = 'btn btn-lg btn-primary shadow-sm d-block mx-auto my-3';
button.textContent = 'Click Me!';
let main = document.querySelector('main');
main.insertAdjacentElement('afterbegin', button);
button.addEventListener('click', () => Swal.fire(`You're Awesome!`));

let form = document.querySelector('form');
form.addEventListener('submit', () => {
	event.preventDefault();
	let userInput = document.querySelector('input').value;
	Swal.fire(userInput);
	document.querySelector('input').value = '';
});

let selectDiv = document.querySelectorAll('div');
let div = selectDiv[1];
div.style.border = '1px solid black';
div.style.height = '100px';
div.addEventListener('mouseover', () => div.style.backgroundColor = randomColor());
div.addEventListener('mouseout', () => div.style.backgroundColor = '');

let p = document.createElement('p');
let pText = document.createTextNode('Spicy jalapeno bacon ipsum dolor amet bresaola beef ribs ribeye cupim, prosciutto meatball spare ribs beef frankfurter pork porchetta tongue. Leberkas sirloin drumstick pig andouille jowl buffalo turducken prosciutto turkey ground round beef ribs biltong. Leberkas frankfurter pancetta beef, sirloin pork belly beef ribs buffalo. Shank doner sirloin swine ball tip.');
p.appendChild(pText);
main.insertBefore(p, main.children[3]);
p.addEventListener('click', () => p.style.color = randomColor());

let button2 = document.createElement('button');
button2.className = 'btn btn-lg btn-primary shadow-sm d-block mx-auto my-3';
button2.textContent = 'Add Name';
main.insertBefore(button2, main.children[4]);
button2.addEventListener('click', () => {
	let span = document.createElement('span');
	span.style.display = 'inline-block';
	span.style.margin = '1em';
	let spanText = document.createTextNode('Nicole');
	span.appendChild(spanText);
	nameDiv.appendChild(span);
});

let nameDiv = document.createElement('div');
main.insertBefore(nameDiv, main.children[5]);

function randomColor() {
	let colors = ['#e83131', '#ed5ae8', '#46c232', '#a337e6', '#53c1e6', '#f2b03d', '#000'];
	return colors[Math.floor(Math.random() * colors.length)];
}

let friends = ['Shannon', 'Tony', 'Kim', 'Rachael', 'David', 'Lorenz', 'Shelby', 'Erika', 'Chelsea', 'Amber'];

let buttonSelector = document.querySelectorAll('button');
let button3 = buttonSelector[3];
button3.addEventListener('click', () => {
	let randomFriend = friends[Math.floor(Math.random() * friends.length)];
	let li = document.createElement('li');
	li.className = 'list-group-item';
	let liText = document.createTextNode(randomFriend);
	li.appendChild(liText);
	let ul = document.querySelector('ul');
	ul.appendChild(li);
});