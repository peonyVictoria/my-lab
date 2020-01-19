filterSelection('all');

function filterSelection(type) {
	var i;
	var x = document.getElementsByClassName("portfolio-list");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(type).style.display = "flex";
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-selection");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active-selection");
		current[0].className = current[0].className.replace(" active-selection", "");
		this.className += " active-selection";
	});
}