import { Icon } from "@iconify/react";
import { Viewer } from "@react-pdf-viewer/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TitleXl } from "./common.components";
import { fakeGroup, fakeGroupData, ItemListGroupRow } from "./groups.components";
import { ItemList } from "./itemList.component";
import { ItemListKeyRow, fakeKeyData, AddKeyModal } from "./key.components";
import { fakeMember, fakeMemberData, ItemListMemberRow, MemberDataModal } from "./members.components";

export const FileCreator = () => {
    // const params = useParams();
    const navigate = useNavigate();

    const [inputFile,setInputFile] = useState()

    useEffect(() => {
        //GET members
        // setMembers(fakeMemberData);
        // setGroups(fakeGroupData);
    },[])

    return (
        <>
            <div className="w-4/5 bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Create File</TitleXl>
            </div>
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
                        <ItemList title="Keys" items={[]} AddItemModal={AddKeyModal} ViewItemModal={null} ItemComponent={ItemListKeyRow}/>

                    </div>
                    
                    <input id="file-upload" type="file" className="hidden"/>
                    <div 
                        id="drop_zone"
                        onClick={()=>{
                            document.getElementById("file-upload")?.click()
                        }}
                        onDrop={(ev)=>{
                            console.log('File(s) dropped');

                            // Prevent default behavior (Prevent file from being opened)
                            ev.preventDefault();
                            
                            console.log(ev.dataTransfer)
                            console.log(ev.dataTransfer.files)
                            console.log(ev.dataTransfer.items[1])
                        }}
                        onDragOver={(ev)=>{
                            console.log('File(s) in drop zone');

                            // Prevent default behavior (Prevent file from being opened)
                            ev.preventDefault();
                        }}
                        className="transition-all cursor-pointer w-full px-4 h-[60vh] rounded-3xl bg-slate-400 bg-opacity-10 border-4 border-slate-600 hover:bg-opacity-25 mx-4 flex"
                    >
                        <div className="mx-auto my-auto">
                            <Icon icon="material-symbols:add-box-outline-rounded" width="120" className="text-slate-300 mx-auto"/>
                            <p className="text-slate-300 font-bold text-lg w-2/3 mx-auto text-center">click to add a file, drag and drop, or start adding keys on the left to create a file</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const FileEditor = () => {
    const params = useParams();
    const navigate = useNavigate();

    // const [members,setMembers] = useState(Array<fakeMember>);
    // const [groups,setGroups] = useState(Array<fakeGroup>);

    useEffect(() => {
        //GET members
        // setMembers(fakeMemberData);
        // setGroups(fakeGroupData);
    },[])

    return (
        <>
            <div className="w-4/5 bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>File {params.file_name}</TitleXl>
            </div>
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
                        <Viewer fileUrl="https://neuro-exed-images.s3.amazonaws.com/tst/testing.pdf" />
                    </div>

                    <div>


                    </div>
                </div>
            </div>
        </>
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
                    <Viewer fileUrl="https://neuro-exed-images.s3.amazonaws.com/tst/testing.pdf" />
                </div>

                <div>


                </div>
            </div>
        </div>
    )
}