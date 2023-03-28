import { TitleXl } from "../components/common.components";
import { useNavigate, useParams } from "react-router-dom";
import { fakeMemberData, MemberCardSm } from "../components/members.components";
import { useEffect, useState } from "react";
import { AddGroupIcon } from "../components/groups.components";



/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const GroupDirectory = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [members,setMembers] = useState();
    const [search,setSearch] = useState("")

    useEffect(() => {
        fetch("https://wh5bs8h969.execute-api.us-east-1.amazonaws.com/prod/users",{
            method: "GET", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "mode": "cors"
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    },[])

    return (
        <div className="pt-10 w-4/5 mx-auto">
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Group Directory</TitleXl>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-2 rounded mt-4">
                <input placeholder="search..." className="p-2 bg-opacity-25 bg-gray-600 w-1/2" onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className="px-10 flex flex-wrap justify-between">

                <AddGroupIcon 
                    group={{
                        name:"Add Group"
                    }}
                    onClick={()=>{
                        
                    }}
                />
            </div>
        </div>
    )
}

export default GroupDirectory;