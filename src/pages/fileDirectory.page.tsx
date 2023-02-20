import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { TitleMd, TitleSm, TitleXl } from "../components/common.components";
import { fakeGroup, fakeGroupData, ItemListGroupRow } from "../components/groups.components";
import { ItemList } from "../components/itemList.component";
import { fakeMember, fakeMemberData, ItemListMemberRow, MemberDataModal } from "../components/members.components";


//PDF GEN FILES
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const FileDirectory = () => {
    const [members,setMembers] = useState(Array<fakeMember>);
    const [groups,setGroups] = useState(Array<fakeGroup>);

    useEffect(() => {
        //GET members
        setMembers(fakeMemberData);
        setGroups(fakeGroupData);
    },[])

    return (
        <div className="pt-10">
            <div className="w-4/5 bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Files</TitleXl>
            </div>
            <div className="w-4/5 mx-auto">

                <div className="flex mt-8">
                    <div className="w-full sm:w-1/2 md:w-1/5 transition-width rounded-md overflow-hidden">
                        <ItemList title="Members" items={members} AddItemModal={null} ViewItemModal={MemberDataModal} ItemComponent={ItemListMemberRow}/>
                        <ItemList title="Groups" className="my-8" items={groups} AddItemModal={null} ViewItemModal={null} ItemComponent={ItemListGroupRow}/>

                    </div>

                    <div className="w-full px-4 h-[80vh]">
                        <Viewer fileUrl="./assets/testing.pdf" />
                    </div>

                    <div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileDirectory;