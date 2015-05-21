var smallBoxArray = document.getElementsByTagName('div');

for (var i = 0; i<16; i++) {
	smallBoxArray[i].addEventListener('mouseover', onHover);
	smallBoxArray[i].addEventListener('mouseout', outHover);
}

function onHover (e) {
	e.target.style.backgroundColor = 'red';
}

function outHover (e) {
    e.target.style.backgroundColor = '#999';
}

 
