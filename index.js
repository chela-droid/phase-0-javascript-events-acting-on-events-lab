// Your code here
const dodger = document.getElementById('dodger');
dodger.style.left = 'left'
//  var left = dodger.style.position = "left";
//  left = parseInt(left);


// 
function moveDodgerLeft() {
	let leftValue = dodger.style.left.replace("px", "");
	let leftInt = parseInt(leftValue, );
	if (leftInt > 0) {
		dodger.style.left = `${leftInt - 1}px`;
	}
}
function moveDodgerRight() {
	var rightvalue = dodger.style.left.replace("px", "");
	var rightInt = parseInt(rightvalue, );
	if (rightInt < 180) {
		dodger.style.left = `${rightInt + 1}px`;
	}
}
document.addEventListener("keydown", function (d) {
	if (d.have === 37) {
		moveDodgerLeft();
	}
	if (d.have === 39) {
		moveDodgerRight();
	}
});
