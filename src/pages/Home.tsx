import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();

    return (
        <div>
            <p>Welcome! (Protected by Firebase!)</p>
            <button onClick={() => signOut(auth)}>Sign out</button>
        </div>
    );
};

export default HomePage;