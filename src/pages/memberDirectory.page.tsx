import { TitleXl } from "../components/common.components";
import { useNavigate, useParams } from "react-router-dom";
import { fakeMemberData, MemberCardSm } from "../components/members.components";



/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const MemberDirectory = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="pt-10 w-4/5 mx-auto">
            <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Customer Directory</TitleXl>
            </div>
            <div className="p-10 flex flex-wrap justify-between">
                {
                    fakeMemberData.map((member) => {
                        return <MemberCardSm member={member} />
                    })
                }
            </div>
        </div>
    )
}

export default MemberDirectory;