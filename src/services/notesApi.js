import { post, get } from './request';

const URL = 'https://cc-to-done.firebaseio.com/';
const NOTES_URL = `${URL}/notes`;

// const getNotesUrl = key => `${NOTES_URL}/${key}.json`;

export const getNotes = () => {
  return get (`${NOTES_URL}.json`)
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

export const addNote = (note) => {
  const url = `${NOTES_URL}.json`;
  return post(url, note)
    .then(res => {
      note.key = res.name;
      return note;
    });
};

// export const updateNote = note => {
//   // const url = getNoteUrl(note.key);
//   return put( note);
// };




