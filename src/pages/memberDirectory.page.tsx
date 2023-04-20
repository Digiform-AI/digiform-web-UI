import { TitleXl } from "../components/common.components";
import { useNavigate, useParams } from "react-router-dom";
import { fakeMemberData, MemberCardSm } from "../components/members.components";
import { useEffect, useState } from "react";



/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const MemberDirectory = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [members, setMembers] = useState();
    const [search, setSearch] = useState("")

    return (
        <div className="pt-10 w-4/5 mx-auto">
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Member Directory</TitleXl>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-2 rounded mt-4">
                <input placeholder="search..." className="p-2 bg-opacity-25 bg-gray-600 w-1/2" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="px-10 flex flex-wrap justify-between">
                {
                    fakeMemberData
                        .filter(member => {
                            return member.first.includes(search) || member.last.includes(search)
                        })
                        .map((member) => {
                            return <MemberCardSm member={member} />
                        })
                }
            </div>
        </div>
    )
}

export default MemberDirectory;