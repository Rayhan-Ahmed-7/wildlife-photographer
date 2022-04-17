// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAzjrRiOyFyqqsQA-pslfQVhTcoi7X4d6k",
//   authDomain: "wild-life-photographer.firebaseapp.com",
//   projectId: "wild-life-photographer",
//   storageBucket: "wild-life-photographer.appspot.com",
//   messagingSenderId: "200150920502",
//   appId: "1:200150920502:web:9b63e9bef939cda07fd797"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;