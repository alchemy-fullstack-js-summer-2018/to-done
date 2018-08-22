import { get, post, put, del } from './request';

const URL = 'https://rbt-artists-store.firebaseio.com/';
const ARTISTS_URL = `${URL}/artists`;

const getAnimalUrl = key => `${ARTISTS_URL}/${key}.json`;

export const getAnimals = () => {
  return get(`${ARTISTS_URL}.json`)
    .then(response => {
      return response
        ? Object.keys(response).map(key => {
          const each = response[key];
          each.key = key;
          return each;
        })
        : [];
    });
};

export const addAnimal = (animal) => {
  const url = `${ARTISTS_URL}.json`;
  return post(url, animal)
    .then(res => {
      animal.key = res.name;
      return animal;
    });
};

export const updateAnimal = animal => {
  const url = getAnimalUrl(animal.key);
  return put(url, animal);
};

export const removeAnimal = id => {
  const url = getAnimalUrl(id);
  return del(url);
};