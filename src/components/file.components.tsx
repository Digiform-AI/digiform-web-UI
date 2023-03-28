import { Icon } from "@iconify/react";
import { Viewer } from "@react-pdf-viewer/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TitleLg, TitleXl } from "./common.components";
import { fakeGroup, fakeGroupData, ItemListGroupRow } from "./groups.components";
import { ItemList } from "./itemList.component";
import { ItemListKeyRow, fakeKeyData, AddKeyModal } from "./key.components";
import { fakeMember, fakeMemberData, ItemListMemberRow, MemberCardSm, MemberDataModal, SelectableMemberCardSm } from "./members.components";
import Dropzone from "react-dropzone";

export const FileCreator = () => {
    // const params = useParams();
    const navigate = useNavigate();

    const [submitted,setSubmitted] = useState(false)
    const [file, setFile] = useState<File|null>();

    const handleDrop = (acceptedFiles:any) => {
        console.log('DROPPED')
        setFile(acceptedFiles[0]);
    };

    const handleSelect = (e:any) => {
        console.log('okei')
        setFile(e.target.files[0])
    }

    useEffect(() => {
        
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
                    <input id="file-upload" type="file" className="hidden" onChange={handleSelect}/>
                    {
                        submitted?(
                            <div 
                                id="drop_zone"
                                onClick={()=>{
                                    document.getElementById("file-upload")?.click()
                                }}
                                onDrop={handleDrop}
                                onDragOver={(ev)=>{
                                    console.log('File(s) in drop zone');
                                    ev.preventDefault();
                                }}
                                className="transition-all cursor-pointer w-full px-4 h-[60vh] rounded-3xl bg-slate-400 bg-opacity-10 border-4 border-slate-600 hover:bg-opacity-25 mx-4 flex"
                            >
                                <div className="mx-auto my-auto">
                                    <Icon icon="twemoji:check-mark-button" width="120" className="text-slate-300 mx-auto"/>
                                    <p className="text-slate-300 font-bold text-lg w-2/3 mx-auto text-center">File successfully uploaded! View it in the files directory</p>
                                </div>
                            </div>
                        ):(
                            <>
                                {
                                    file? (
                                        <div
                                            className="transition-all cursor-pointer w-full px-4 h-[60vh] rounded-3xl bg-slate-400 bg-opacity-10 border-4 border-slate-600 hover:bg-opacity-25 mx-4 flex"
                                        >
                                            <div className="mx-auto my-auto">
                                                <p className="text-slate-300 font-bold text-lg w-full mx-auto text-center">File Uploaded</p>
                                                <p className="text-slate-300 font-light text-lg w-full mx-auto text-center underline">{file.name}</p>
                                                <p className="text-slate-300 font-light text-lg w-full mx-auto text-center">{file.size}KB</p>
                                                <input className="text-slate-300 font-light text-lg w-full mx-auto text-center bg-transparent rounded border-2 my-2" placeholder="enter file name"/>
                                                <button className="rounded p-2 border block mx-auto text-white hover:bg-gray-500 bg-opacity-50"
                                                    onClick={()=>{
                                                        console.log('sender to DB')
                                                        console.log('router to view')
                                                        setSubmitted(true)
                                                    }}
                                                >Confirm</button>
                                                <p className="text-slate-300 font-light text-lg w-full mx-auto text-center hover:underline" onClick={()=>setFile(null)}>remove</p>
            
                                            </div>
                                        </div>
                                    ):(
            
                                        <div 
                                            id="drop_zone"
                                            onClick={()=>{
                                                document.getElementById("file-upload")?.click()
                                            }}
                                            onDrop={handleDrop}
                                            onDragOver={(ev)=>{
                                                console.log('File(s) in drop zone');
                                                ev.preventDefault();
                                            }}
                                            className="transition-all cursor-pointer w-full px-4 h-[60vh] rounded-3xl bg-slate-400 bg-opacity-10 border-4 border-slate-600 hover:bg-opacity-25 mx-4 flex"
                                        >
                                            <div className="mx-auto my-auto">
                                                <Icon icon="material-symbols:add-box-outline-rounded" width="120" className="text-slate-300 mx-auto"/>
                                                <p className="text-slate-300 font-bold text-lg w-2/3 mx-auto text-center">click to add a file, drag and drop, or start adding keys on the left to create a file</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                    </div>
            </div>
        </>
    )
}


export const FileEditor = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [assignModal,setAssignModal] = useState<any>()

    // const [members,setMembers] = useState(Array<fakeMember>);
    // const [groups,setGroups] = useState(Array<fakeGroup>);

    useEffect(() => {
        //GET members
        // setMembers(fakeMemberData);
        // setGroups(fakeGroupData);
    },[])

    return (
        <>
            {
                assignModal?(
                    <AssignFileModal className="" item={null} toggleModal={setAssignModal}/>
                ):(<></>)
            }
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
                        <button
                            onClick={()=>setAssignModal(params.file_name)}
                            className="rounded w-full py-3 bg-teal-300 hover:bg-teal-400 my-4"
                        >
                            Assign File
                        </button>
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


/** Modal that renders to allow the assignment of users to a file
 * 
 * @param className list of classes to add to this component 
 * @param item the set of data describing the member to render 
 * @param toggleModal a state mutator from the parent that can close this modal
 * @returns a rendered modal describing a member
 */
export const AssignFileModal = ({className,item,toggleModal}:{className:String|null,item:any|null,toggleModal:any}) => {

    return (
        <div className={`absolute top-0 left-0 z-[5000] w-full h-full p-10 mx-auto backdrop-blur-md ${className}`}>
            <div className="w-4/5 bg-gray-300 h-4/5 mx-auto my-auto rounded-2xl relative overflow-hidden">
                <Icon 
                    icon="ph:x-circle-bold" 
                    className="absolute top-2 right-4 text-white"
                    width="48"
                    onClick={() => {
                        toggleModal(null)
                    }}
                />
                <TitleXl className="p-4 w-full bg-slate-700">Assignable Members & Groups</TitleXl>
                <div className="h-full overflow-scroll pb-8">
                    <div className="p-4">
                        <TitleLg className="text-gray-700">Members</TitleLg>
                        <div className="flex flex-wrap justify-between">
                                {
                                    fakeMemberData.map(member => {
                                        return <SelectableMemberCardSm member={member} />
                                    })
                                }
                        </div>
                        <button
                            className="rounded p-3 bg-teal-400 hover:bg-teal-500 block mx-auto my-8"
                        >Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}