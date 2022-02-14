import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  // apiKey: process.env.APIKEY,
  // authDomain: process.env.AUTHDOMAIN,
  // projectId: process.env.PROJECTID,
  // storageBucket: process.env.STORAGEBUCKET,
  // messagingSenderId: process.env.MESSAGINGSENDERID,
  // appId: process.env.APPID,
  // TODO: migrate credentials to .env
  apiKey: 'AIzaSyCcyLI1lJYa_fjII6wIOrzPXYcxieLFkJw',
  authDomain: 'newsbox-df019.firebaseapp.com',
  projectId: 'newsbox-df019',
  storageBucket: 'newsbox-df019.appspot.com',
  messagingSenderId: '1049034237750',
  appId: '1:1049034237750:web:0bef049d7d67ccf313b597',
  measurementId: 'G-3HX1Q2WGFL',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
// console.log('*****', db)

// const analytics = getAnalytics(firebaseApp)

// var database = firebase.database();

// const save = function () {
//   console.log("Firebase file");
// };

// module.exports = save;

export { db }
