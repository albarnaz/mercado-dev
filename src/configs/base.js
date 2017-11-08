const config = {
  apiKey: 'AIzaSyAx0tU_s3cSliixSof27wrsHSUi3yPwoaQ',
  authDomain: 'mercado-dev.firebaseapp.com',
  databaseURL: 'https://mercado-dev.firebaseio.com',
  projectId: 'mercado-dev',
  storageBucket: 'mercado-dev.appspot.com',
  messagingSenderId: '1006232735302'
};

const Rebase = require('re-base');
const firebase = require('firebase/app');
require('firebase/database');
require('firebase/storage');

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const storage = app.storage();
export default base;
