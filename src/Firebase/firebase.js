// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_xq9rQYOwLfk41CC31e7SftD4wbl2Co",
  authDomain: "finance-app-290f6.firebaseapp.com",
  projectId: "finance-app-290f6",
  storageBucket: "finance-app-290f6.appspot.com",
  messagingSenderId: "819601926596",
  appId: "1:819601926596:web:da951a595ee37a43c6dc91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
