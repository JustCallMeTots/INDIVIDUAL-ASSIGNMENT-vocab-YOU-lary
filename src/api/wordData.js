import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET THAT DATA BITCH
const getWords = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE THAT DATA BIIIITCH
const createWords = (wordObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordObj)
    .then((response) => {
      const demWords = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${response.data.name}.json`, demWords)
        .then(() => {
          getWords(wordObj.uid).then(resolve);
        });
    }).catch(reject);
});

// GET ONE DATA BOI
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET THAT DATA OUTTA HERE
const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getWords().then((wordsArray) => resolve(wordsArray));
    })
    .catch((error) => reject(error));
});

// AYO UPDATE THAT SHIT
const updateWord = (uid, wordObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${wordObj.firebaseKey}.json`, wordObj)
    .then(() => getWords(uid).then(resolve))
    .catch(reject);
});

// YOU WANT THESE SORTED BY LANGUAGE ?
const wordsEnglish = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((userWords) => {
    const wordEng = userWords.filter((words) => words.Language === 'English'); resolve(wordEng);
  }).catch((error) => reject(error));
});

const wordsHebrew = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((userWords) => {
    const wordHeb = userWords.filter((words) => words.Language === 'Hebrew'); resolve(wordHeb);
  }).catch((error) => reject(error));
});

const wordsSpanish = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((userWords) => {
    const wordSpn = userWords.filter((words) => words.Language === 'Spanish'); resolve(wordSpn);
  }).catch((error) => reject(error));
});

export {
  getWords,
  getSingleWord,
  createWords,
  updateWord,
  deleteWord,
  wordsEnglish,
  wordsHebrew,
  wordsSpanish,
};
