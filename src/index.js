function displayRecipe(response) {
	new Typewriter("#recipe", {
		strings: response.data.answer,
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}
function generateRecipes(event) {
	event.preventDefault();

	let recipeInput = document.querySelector("#recipe-ingredients");

	let apiKey = "2a94c32a70f6060a6a93ft57413o5b0a";
	let context =
		"You are a gourman AI assistant, and you know super easy gluten-free recipes. You mission is to generate easy recipe in basic HTML. Make sure to follow the user instructions. Sign recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
	let prompt = `User instructions: Generate a gluten-free recipe with the following ${recipeInput.value}`;
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let recipeElement = document.querySelector("#recipe");
	recipeElement.classList.remove("hidden");
	recipeElement.innerHTML = `<div class="generating">⏳ Generating GF recipe with ${recipeInput.value}</div>`;

	axios.get(apiUrl).then(displayRecipe);
}

let formElement = document.querySelector("#form-recipes-generator");
formElement.addEventListener("submit", generateRecipes);
