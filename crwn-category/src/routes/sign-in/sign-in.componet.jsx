import{ signInWithGooglePopup ,createUserDocumentFormAuth} from "../../utils/firebase/firebase.utils"
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDOcRef = await createUserDocumentFormAuth(user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                sign in with  google
            </button>
        </div>
    );
}
export default SignIn;