import { async } from 'regenerator-runtime';
// import * as config from './config.js';
import { TIMEOUT_SEC } from './config.js';
import { getJSON } from './helpers.js';
import { API_URL } from './config';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    // console.log(res, data);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    // alert(err);
    console.error(`${err}🔥🔥🔥🔥`);
  }
};
