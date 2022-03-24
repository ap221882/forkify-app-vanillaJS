// import icons from '../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    // loading recipe
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    // let recipe = model.state.recipe;
    // 2 rendering recipe

    recipeView.render(model.state.recipe);
  } catch (err) {
    // alert(err);
    // console.log(err);
    recipeView.renderError();
  }
};
// controlRecipe();

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();
