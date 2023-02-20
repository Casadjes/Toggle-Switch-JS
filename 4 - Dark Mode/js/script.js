const body = document.querySelector("body");
const btnToggle = document.getElementById("toggle");

btnToggle.onclick = function () {
	btnToggle.classList.toggle("active");
	body.classList.toggle("active");
};
