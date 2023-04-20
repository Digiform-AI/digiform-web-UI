import { TitleXl } from "../components/common.components";
import { useNavigate, useParams } from "react-router-dom";
import { fakeMemberData, MemberCardSm } from "../components/members.components";
import { useEffect, useState } from "react";
import axios from 'axios';



/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const Settings = () => {

    useEffect(() => {
        async function getUser() {
            const res = await axios.post('https://v2n9g5nv1j.execute-api.us-east-1.amazonaws.com/prod/query', {
                resource: 'Users',
                command: 'GET',
                request: {
                    email: "tuser@gmail.com"
                }
            })
            console.log(res)
        }
        getUser()
    })

    const navigate = useNavigate();
    const params = useParams();

    const [first, setFirst] = useState("Tom")
    const [last, setLast] = useState("Sawyer")
    const [phone, setPhone] = useState("5187075363")

    return (
        <div className="pt-10 w-4/5 mx-auto">
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Your Settings</TitleXl>
            </div>
            <div className="bg-slate-700 mx-auto p-4 rounded my-4 flex gap-10">
                <img src={`https://eu.ui-avatars.com/api/?name=${first}+${last}&size=150`} className="rounded-xl bg-white w-1/4" />

                <div className="">
                    <div className="flex gap-1 justify-between my-4">
                        <div>
                            <p className="text-white font-lato">First Name</p>
                            <input value={first} onChange={(e) => setFirst(e.target.value)} className="bg-transparent text-gray-300 border-b" />
                        </div>
                        <br />
                        <div>
                            <p className="text-white font-lato">Last Name</p>
                            <input value={last} onChange={(e) => setLast(e.target.value)} className="bg-transparent text-gray-300 border-b" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className="text-white font-lato">Phone Number</p>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-transparent text-gray-300 border-b" />
                        </div>
                        <div>
                            <p className="text-white font-lato">Username</p>
                            <p className="text-gray-400 font-lato">your username</p>
                        </div>
                        <br />
                        <div>
                            <p className="text-white font-lato">Email</p>
                            <p className="text-gray-400 font-lato">yourUsername@email.net</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;