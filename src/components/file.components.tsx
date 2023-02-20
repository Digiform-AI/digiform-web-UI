import { Icon } from "@iconify/react";
import { Viewer } from "@react-pdf-viewer/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fakeGroup, fakeGroupData, ItemListGroupRow } from "./groups.components";
import { ItemList } from "./itemList.component";
import { ItemListKeyRow, fakeKeyData, AddKeyModal } from "./key.components";
import { fakeMember, fakeMemberData, ItemListMemberRow, MemberDataModal } from "./members.components";

export const FileEditor = () => {
    // const params = useParams();
    const navigate = useNavigate();

    // const [members,setMembers] = useState(Array<fakeMember>);
    // const [groups,setGroups] = useState(Array<fakeGroup>);

    useEffect(() => {
        //GET members
        // setMembers(fakeMemberData);
        // setGroups(fakeGroupData);
    },[])

    return (
        <div className="w-4/5 mx-auto">
            <div 
                className="flex py-2 group w-fit cursor-pointer"
                onClick={()=> {
                    navigate('/files')
                }}
            >
                <Icon 
                    icon="material-symbols:arrow-circle-left-outline-rounded" 
                    className=" text-white" 
                    width="32" 
                    
                />
                <p className="my-auto text-white font-lato ml-2 text-lg group-hover:underline">Back to files</p>
            </div>

            <div className="flex mt-8">
                <div className="w-full sm:w-1/2 md:w-1/5 transition-width rounded-md overflow-hidden">
                    <ItemList title="Keys" items={fakeKeyData} AddItemModal={AddKeyModal} ViewItemModal={null} ItemComponent={ItemListKeyRow}/>

                </div>

                <div className="w-full px-4 h-[80vh]">
                    <Viewer fileUrl="/assets/testing.pdf" />
                </div>

                <div>


                </div>
            </div>
        </div>
    )
}


export const FileViewer = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [members,setMembers] = useState(Array<fakeMember>);
    const [groups,setGroups] = useState(Array<fakeGroup>);

    useEffect(() => {
        //GET members
        setMembers(fakeMemberData);
        setGroups(fakeGroupData);
    },[])

    return (
        <div className="w-4/5 mx-auto">
            <div 
                className="flex pt-6 group w-fit cursor-pointer"
                onClick={()=> {
                    navigate('/files')
                }}
            >
                <Icon 
                    icon="material-symbols:arrow-circle-left-outline-rounded" 
                    className=" text-white" 
                    width="32" 
                    
                />
                <p className="my-auto text-white font-lato ml-2 text-lg group-hover:underline">Back to files</p>
            </div>

            <div className="flex mt-8">
                <div className="w-full sm:w-1/2 md:w-1/5 transition-width rounded-md overflow-hidden">
                    <ItemList title="Members" items={members} AddItemModal={null} ViewItemModal={MemberDataModal} ItemComponent={ItemListMemberRow}/>
                    <ItemList title="Groups" className="my-8" items={groups} AddItemModal={null} ViewItemModal={null} ItemComponent={ItemListGroupRow}/>

                </div>

                <div className="w-full px-4 h-[80vh]">
                    <Viewer fileUrl="/assets/testing.pdf" />
                </div>

                <div>


                </div>
            </div>
        </div>
    )
}