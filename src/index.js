function generateRecipes(event) {
	event.preventDefault();

	new Typewriter("#recipe", {
		strings: "very delicious",
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}

let formElement = document.querySelector("#form-recipes-generator");
formElement.addEventListener("submit", generateRecipes);
