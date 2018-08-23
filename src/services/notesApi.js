import { put, post, get, del } from './request';

const URL = 'https://react-search-e534c.firebaseio.com';
const NOTES_URL = `${URL}/notes`;

const getNoteUrl = key => `${NOTES_URL}/${key}.json`;

export const getNotes = () => {
  return get(`${NOTES_URL}.json`)
    .then(res => {
      return res
        ? Object.keys(res).map(key => {
          const each = res[key];
          each.key = key;
          return each;
        })
        : [];
    });
};

export const addNote = note => {
  const url = `${NOTES_URL}.json`;
  return post(url, note)
    .then(res => {
      note.key = res.name;
      return note;
    });
};

export const updateNote = note => {
  const url = getNoteUrl(note.key);
  return put(url, note);
};

export const removeNote = id => {
  const url = getNoteUrl(id);
  return del(url);
};