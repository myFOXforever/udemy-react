import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBTHm44ztlbJl_Jvl4As95glUz3VM9sFXo",
  authDomain: "crwn-clothing-db-b20fa.firebaseapp.com",
  projectId: "crwn-clothing-db-b20fa",
  storageBucket: "crwn-clothing-db-b20fa.appspot.com",
  messagingSenderId: "475234959199",
  appId: "1:475234959199:web:d6a2a9cb580eac901040ea",
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFormAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());
    //如果用户不存在
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });

        } catch (error) {
            console.log('error', error.message);
        }
    }
    return userDocRef;
};
