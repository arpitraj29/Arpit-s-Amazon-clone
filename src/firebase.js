import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCVRELIq5maYRjGDm5F8xJwPoKjYrX1nuc",
  authDomain: "challenge-ar.firebaseapp.com",
  projectId: "challenge-ar",
  storageBucket: "challenge-ar.appspot.com",
  messagingSenderId: "418908507837",
  appId: "1:418908507837:web:6db7a019f792909a47b1d4",
  measurementId: "G-Y9YL1403K9"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth=firebase.auth();

export { db , auth };
