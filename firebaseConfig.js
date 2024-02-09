import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA2XTc8ySjBnw8I8g4dO8Rjpw-b2mPgPC8",
  authDomain: "fitfinder-b3646.firebaseapp.com",
  projectId: "fitfinder-b3646",
  storageBucket: "fitfinder-b3646.appspot.com",
  messagingSenderId: "839393205538",
  appId: "1:839393205538:web:1b7e02eda67646f66cd97b",
  measurementId: "G-3JPJGDX6MB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

//android 796714567015-u63obl7q6406ejpucau6rln4hu2iaonm.apps.googleusercontent.com