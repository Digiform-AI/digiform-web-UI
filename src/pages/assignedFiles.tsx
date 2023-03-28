import { SubTitleLg, TitleXl } from "../components/common.components";
import { useNavigate, useParams } from "react-router-dom";
import { fakeMemberData, MemberCardSm } from "../components/members.components";
import { useEffect, useState } from "react";
import { FolderIcon } from "../components/folder.components";



/** Assigned File Directory Page
 * 
 * @returns the rendered file directory page
 */
const AssignedFileDirectory = () => {
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
                <TitleXl>Assigned Files</TitleXl>
                <SubTitleLg>Select a file to review and complete it</SubTitleLg>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-2 rounded mt-4">
                <input placeholder="search..." className="p-2 bg-opacity-25 bg-gray-600 w-1/2" onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className="px-10 flex flex-wrap justify-between">
                <FolderIcon 
                    folder={{
                        name:"Contract"
                    }}
                    onClick={()=>{
                        // navigate('view/'+exampleFolder.name)
                    }}
                />

                <FolderIcon 
                    folder={{
                        name:"Contractors Agreement"
                    }}
                    onClick={()=>{
                        // navigate('view/'+exampleFolder.name)
                    }}
                />

                <FolderIcon 
                    folder={{
                        name:"Floor Policy"
                    }}
                    onClick={()=>{
                        // navigate('view/'+exampleFolder.name)
                    }}
                />

                <FolderIcon 
                    folder={{
                        name:"Adjustment Agreement"
                    }}
                    onClick={()=>{
                        // navigate('view/'+exampleFolder.name)
                    }}
                />
            </div>
        </div>
    )
}

export default AssignedFileDirectory;