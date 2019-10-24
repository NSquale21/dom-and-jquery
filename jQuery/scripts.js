let alertButton = $('<button class="btn btn-lg btn-primary shadow-sm d-block mx-auto my-3">Click Me!</button>');
alertButton.insertBefore('form');
alertButton.click(() => Swal.fire(`You're Awesome!`));

$('form').submit(() => { 
	event.preventDefault();
    let userInput = $('input').val();
    Swal.fire(userInput);
    userInput = $('input').val('');
});

let div = $('div.my-3');
div.css({
	'border' : '1px solid black',
	'height' : '100px'
});
div.mouseover(() => div.css('backgroundColor', randomColor()));
div.mouseout(() => div.css('backgroundColor', ''));

let p = $('<p>Spicy jalapeno bacon ipsum dolor amet bresaola beef ribs ribeye cupim, prosciutto meatball spare ribs beef frankfurter pork porchetta tongue. Leberkas sirloin drumstick pig andouille jowl buffalo turducken prosciutto turkey ground round beef ribs biltong. Leberkas frankfurter pancetta beef, sirloin pork belly beef ribs buffalo. Shank doner sirloin swine ball tip.</p>');
p.click(() => p.css('color', randomColor()));
p.insertAfter('div.my-3');

let nameButton = $('<button class="btn btn-lg btn-primary shadow-sm d-block mx-auto my-3">Add Name</button>');
nameButton.insertAfter(p);
nameButton.click(() => {
	let span = $('<span>Nicole</span>');
	span.css({
		'display' : 'inline-block',
		'margin' : '1em'
	})
	nameDiv.append(span);
});

let nameDiv = $('<div></div>');
nameDiv.insertAfter(nameButton);

const friends = ['Shannon', 'Tony', 'Kim', 'Rachael', 'David', 'Lorenz', 'Shelby', 'Erika', 'Chelsea', 'Amber'];
let i = 0;

$('button').last().click(() => {
	if (i >= friends.length - 1) {
		$('button').last().prop('disabled', true);
	}
		let li = $(`<li class="list-group-item">${friends[i]}</li>`);
		$('ul').append(li);
		i++;
});

function randomColor() {
	let colors = ['#e83131', '#ed5ae8', '#46c232', '#a337e6', '#53c1e6', '#f2b03d', '#000'];
	return colors[Math.floor(Math.random() * colors.length)];
}
