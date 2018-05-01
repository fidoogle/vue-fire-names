import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBXbFqCOh8XgeH4dV-fp4lvJEhkGiozDRc',
  authDomain: 'vue-fire-names.firebaseapp.com',
  databaseURL: 'https://vue-fire-names.firebaseio.com',
  projectId: 'vue-fire-names',
  storageBucket: 'vue-fire-names.appspot.com',
  messagingSenderId: '570831598792'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
