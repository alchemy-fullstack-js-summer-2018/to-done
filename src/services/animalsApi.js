import { put, post, get, del } from './request';

const URL = 'https://cc-to-done.firebaseio.com/';
const ANIMALS_URL = `${URL}/animals`;

const getAnimalUrl = key => `${ANIMALS_URL}/${key}.json`;

export const getAnimals = () => {
  return get (`${ANIMALS_URL}.json`)
    .then(response => {
      return response 
        ?Object.keys(response).map(key => {
          const each = response[key];
          each.key = key;
          return each;
        })
        : [];
    });
};

export const addAnimal = (animal) => {
  const url = `${ANIMALS_URL}.json`;
  return post(url, animal)
    .then(res => {
      animal.key = res.name;
      return animal;
    });
};

