import { post, get, put, del } from './request';

const URL = 'https://to-done-df382.firebaseio.com';
const NOTES_URL = `${URL}/notes`;

const getNoteUrl = key => `${NOTES_URL}/${key}.json`;

export const getNotes = () => {
  return get(`${NOTES_URL}.json`)
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

export const addNotes = note => {
  const url = `${NOTES_URL}.json`;
  return post(url, note)
    .then(res => {
      //check if name or title
      note.key = res.name;
      return note;
    });
};

export const updateNote = note => {
  const url = getNoteUrl(note.key);
  return put(url, note);
};

export const removeNote = key => {
  const url = getNoteUrl(key);
  return del(url);
};