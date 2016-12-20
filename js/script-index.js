$(document).ready( function(){

	//obteniendo ubicacion actual 
	var ubicacion= window.location.pathname.split("/");
	var url = ubicacion[ubicacion.length-1];

	// comparar ubicacion
	if(url === 'index.html'){
		$('.js-back').css({ display: 'none' });
	}else{
		$('.js-menu').css({ display: 'none'});
	}

	//llamando a la funcion "printNews"
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

// pintando  una noticia
function printNews(){
	$('.callout-news p').append('NUEVAS RECETAS');
}
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	$.each( recipesArray, function( i, valor){
  		if(valor.highlighted === true){
  			renderRecipe(valor);
  		}  	
	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


