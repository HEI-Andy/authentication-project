import Button from "../button";
import {getAuth, signOut} from "firebase/auth";
import {app} from "../config/config";
import "./home.css";
import React, {useState} from "react";

const HomePage : React.FC = () => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState<boolean>(false);

    return(
        <>
            {
                loading ?
                    <div className="load">
                        <p className="btn-shine">PLEASE WAIT...</p>
                    </div>
                    :
                    <div className="container col-md-6 rounded-3 global bg-dark">
                        <div className="box">
                            <div className="title mt-md-5">
                                <span className="block"></span>
                                <h1>Hello!<span></span></h1>
                            </div>

                            <div className="role mt-md-4">
                                <div className="block"></div>
                            </div>
                            <Button label="Sign out" handleClick={() => {
                                signOut(auth);
                                setLoading(true);
                            }
                            }
                                    handleClass="btn btn-secondary mt-md-3"/>
                        </div>
                    </div>
            }
        </>
    )
}
export default HomePage;