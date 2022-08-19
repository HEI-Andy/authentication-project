import {initializeApp} from "firebase/app";

const Config = {
    firebaseConfig:{
        apiKey: "AIzaSyBHzEZxP7CEztmlHhjkyJqlbOqsCdKkyA0",
        authDomain: "my-app-ebb4d.firebaseapp.com",
        projectId: "my-app-ebb4d",
        storageBucket: "my-app-ebb4d.appspot.com",
        messagingSenderId: "854052353686",
        appId: "1:854052353686:web:121266a5df44e546ce74b7"
    }
}

export const app = initializeApp(Config.firebaseConfig);
