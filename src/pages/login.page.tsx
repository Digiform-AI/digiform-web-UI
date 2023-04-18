import { Icon } from "@iconify/react";
import { useState } from "react";
import { LabeledInput, TitleLg, TitleSm, TitleXl } from "../components/common.components";

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, UserCredential } from "firebase/auth";

const loginWithGoogle = async () => {
    const auth = getAuth()

    signInWithRedirect(auth, new GoogleAuthProvider()).then(() => {
        getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result!);
            const token = credential?.accessToken;
    
            // The signed-in user info.
            const user = result?.user;



            console.log('provision in DB')
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

const loginWithUsername = async (email:string, password:string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}


/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const Login = () => {
    const [login,setLogin] = useState(true)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className="flex flex-col w-full h-full absolute top-0 left-0">
            <svg className="absolute w-full h-full ">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:"#3cdfff", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#014462", stopOpacity:1}} />
                    </linearGradient>
                </defs>
                <rect width='100%' height='100%' fill="url(#grad1)" />
                <rect width='30%' height='30%' className="opacity-70 fill-[#03A9F4]" transform="translate(50,30) rotate(30)" />
                <rect width='30%' height='30%' className="opacity-70 fill-[#03A9F4]" transform="translate(70,30) rotate(30)" />
                <rect width='30%' height='30%' className="opacity-40 fill-[#03A9F4]" transform="translate(550,120) rotate(30)" />
                <rect width='30%' height='30%' className="opacity-40 fill-[#03A9F4]" transform="translate(570,120) rotate(30)" />
                <rect width='30%' height='30%' className="opacity-40 fill-[#03A9F4]" transform="translate(1050,210) rotate(30)" />
                <rect width='30%' height='30%' className="opacity-40 fill-[#03A9F4]" transform="translate(1070,210) rotate(30)" />
                <rect width='30%' height='30%' className="opacity-40 fill-[#03A9F4]" transform="translate(1550,300) rotate(30)" />
                <rect width='30%' height='30%' className="opacity-40 fill-[#03A9F4]" transform="translate(1570,300) rotate(30)" />
                <rect width='100%' height='100%' fill="url(#grad1)" className="opacity-50"/>
            </svg>


            <div className="md:w-[55%] lg:w-[35%] mx-auto my-auto border z-50 bg-white rounded-xl relative">
                <p className="w-min mx-auto p-6 font-bold text-2xl">Login</p>

                <div className="p-8">
                    <div className="mx-auto">
                        <div className="">
                            <p className="font-lato ">Username</p>
                            <div className="flex border-b p-2">
                                <Icon icon="mdi:user-outline" className="my-auto text-gray-400" width='20'/>
                                <input type="text" className="outline-0 pl-2" placeholder="Type your username" value={username} onChange={((e)=>setUsername(e.target.value))}/>
                            </div>
                        </div>
                        <br/>
                        <div className="">
                            <p className="font-lato ">Password</p>
                            <div className="flex border-b p-2">
                                <Icon icon="mdi:lock" className="my-auto text-gray-400" width='20'/>
                                <input type="text" className="outline-0 pl-2" placeholder="Type your password" value={password} onChange={((e)=>setPassword(e.target.value))}/>
                            </div>
                            <p className="float-right text-gray-500 hover:underline cursor-pointer">forgot password?</p>
                        </div>
                        <br/>
                        <br/>
                        <button onClick={()=> loginWithUsername(username,password)} className="rounded-3xl w-4/5 mx-auto block py-2 bg-gradient-to-r from-indigo-500 to-gray-200 hover:scale-105 transform transition-all">login</button>
                        <br/>

                        <p className="text-center font-lato p-3 text-gray-600">or sign in using</p>
                        <div className="flex justify-around w-1/3 mx-auto">
                            <Icon icon="logos:google-icon"  className="my-auto cursor-pointer" width="26" onClick={loginWithGoogle}/>
                            <Icon icon="logos:facebook"  className="my-auto cursor-pointer" width="30"/>
                            <Icon icon="ps:apple"  className="my-auto cursor-pointer" width="24"/>
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-center text-gray-600">don't have an account?</p>
                        <p className="text-center text-gray-600">email your app administrator for an account</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;