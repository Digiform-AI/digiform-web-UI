import { TitleXl } from "../components/common.components";
import { useNavigate, useParams } from "react-router-dom";
import { fakeMemberData, MemberCardSm } from "../components/members.components";
import { useEffect, useState } from "react";



/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const Organization = () => {
    const navigate = useNavigate();
    const params = useParams();
    

    return (
        <div className="pt-10 w-4/5 mx-auto">
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Your Organization</TitleXl>
            </div>
        </div>
    )
}

export default Organization;