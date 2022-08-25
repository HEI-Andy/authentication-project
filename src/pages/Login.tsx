import React, { useState } from 'react';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    }
    const signInWithGitHub = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GithubAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    }
    const signInWithFacebook = async () => {
        setAuthing(true);

        signInWithPopup(auth, new FacebookAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    }
    const signInWithTwitter = async () => {
        setAuthing(true);

        signInWithPopup(auth, new TwitterAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                console.log("ok")
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    }

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => signInWithGoogle()} disabled={authing}>
                Sign in with Google
            </button>
            <button onClick={() => signInWithGitHub()} disabled={authing}>
                Sign in with GitHub
            </button>
            <button onClick={() => signInWithFacebook()} disabled={authing}>
                Sign in with Facebook
            </button>
            <button onClick={() => signInWithTwitter()} disabled={authing}>
                Sign in with Twitter
            </button>
        </div>
    );
};

export default LoginPage;
