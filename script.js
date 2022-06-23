$(function () {
	$('.message').fadeIn(2000);
});

const myTags = [
	'Python', 'C', 'PHP',
	'Vue', 'Angular', 'C#',
	'Java', 'HTML'
];

let tagCloud = TagCloud('.content', myTags, {
	radius: 250,
	// animation speed
	// slow, normal, fast
	maxSpeed: 'fast',
	initSpeed: 'fast',
	// 0 = top
	// 90 = left
	// 135 = right-bottom
	direction: 135,
	// interact with cursor move on mouse out
	keep: true

});

//To change the color of text randomly
// let colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// let random_color = colors[Math.floor(Math.random() * colors.length)];
let color = '#ffbf00'
document.querySelector('.content').style.color = color;
