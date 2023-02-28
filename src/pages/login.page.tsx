import { Icon } from "@iconify/react";
import { useState } from "react";
import { TitleLg, TitleSm, TitleXl } from "../components/common.components";

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, UserCredential } from "firebase/auth";

const loginWithGoogle = async () => {
    const auth = getAuth()
    console.log("1")

    signInWithRedirect(auth, new GoogleAuthProvider()).then(() => {
        console.log("2")
        getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result!);
            const token = credential?.accessToken;
    
            // The signed-in user info.
            const user = result?.user;
            console.log(user)
        }).catch((error) => {
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    })


}


/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const Login = () => {
    const [login,setLogin] = useState(true)
            
    return (
        <div className="flex flex-col w-full h-full absolute top-0 left-0">
            <div className="pt-10 w-4/5 mx-auto h-fit my-auto">
                <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded flex justify-between">
                    {/* <TitleXl>{login?'Login':'Sign-up'}</TitleXl> */}
                    <TitleXl>Login/Sign-up</TitleXl>
                    {/* <button 
                        className="bg-slate-300 p-2 rounded font-light hover:scale-105"
                        onClick={() => login?setLogin(false):setLogin(true)}
                    >{login?'Create an Account':'Sign into Your Account'}</button> */}
                </div>

                <button className="shadow rounded p-4 flex my-4 mx-auto"
                    onClick={loginWithGoogle}
                
                > Sign-in with Google <Icon icon="logos:google-icon"  className="ml-2 my-auto" width="22"/></button>




                {/* <div className="my-4 bg-slate-400 rounded p-4">
                    <div className="rounded w-full">
                        <TitleLg className="">Username</TitleLg>
                        <input type="text" placeholder="enter your username..." className="p-2 w-full bg-opacity-70 bg-slate-300 focus:ring-0 focus:ring-offset-0 border-none"/>
                    </div>
                </div>
                <div className="my-4 bg-slate-400 rounded p-4">
                    <div className="rounded w-full">
                        <TitleLg className="">Password</TitleLg>
                        <input type="password" placeholder="enter your password..." className="p-2 w-full bg-opacity-70 bg-slate-300 focus:ring-0 focus:ring-offset-0 border-none"/>
                    </div>
                </div>
                <button className="p-3 block mx-auto bg-blue-500 text-white rounded-lg">Login</button> */}
            </div>
        </div>
    )
}

export default Login;