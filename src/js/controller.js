// import icons from '../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);
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
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;
    searchView.clearInput();
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
  } catch (err) {
    console.log(err);
  }
};
// controlSearchResults();
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
