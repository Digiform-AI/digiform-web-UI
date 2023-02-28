import { SubTitleLg , TitleLg, TitleXl } from "../components/common.components";


//PDF GEN FILES
import '@react-pdf-viewer/core/lib/styles/index.css';
import { AddFolderIcon, FolderIcon } from "../components/folder.components";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Icon } from "@iconify/react";




const exampleFolder = {
    name:"Addendum"
}

/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const Home = () => {
    const navigate = useNavigate();
    const params = useParams();
    const auth = getAuth()

    return (
        <div className="pt-10">
            <div className="w-4/5 mx-auto">
                <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                    <TitleXl>Hello {auth.currentUser?.displayName}</TitleXl>
                </div>
                <br/>
                <div className="md:flex">
                    <div className="md:w-[48%]">
                        <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded ">
                            <TitleLg>Notifications</TitleLg>
                            <div className="flex mt-2 bg-slate-500 p-2 border-b-2">
                                <Icon icon="mdi:alert-circle" className="rounded text-red-500"  width="30"/>
                                <p className="ml-2 text-white my-auto hover:underline cursor-pointer font-lato">User John Shaw and 3 others have a late document</p>
                            </div>
                            <div className="flex  bg-slate-500 p-2 border-b-2">
                                <Icon icon="mdi:bell-alert" className="rounded text-yellow-400"  width="30"/>
                                <p className="ml-2 text-white my-auto hover:underline cursor-pointer font-lato">2 users completed their document</p>
                            </div>
                            <div className="flex  bg-slate-500 p-2 ">
                                <Icon icon="mdi:alert-circle" className="rounded text-red-500"  width="30"/>
                                <p className="ml-2 text-white my-auto hover:underline cursor-pointer font-lato">An error has occured processing document 'AEF Contract 2/27'</p>
                            </div>
                            {/* <div className="flex mt-2 bg-slate-500 p-2 border-b-2">
                                <Icon icon="mdi:alert-circle" className="bg-slate-200 rounded text-red-500"  width="30"/>
                                <p className="ml-2 text-white my-auto hover:underline cursor-pointer font-lato">You have a document 12 days late!</p>
                            </div>
                            <div className="flex  bg-slate-500 p-2 border-b-2">
                                <Icon icon="mdi:bell-alert" className="bg-slate-200 rounded text-yellow-400"  width="30"/>
                                <p className="ml-2 text-white my-auto hover:underline cursor-pointer font-lato">You've been reminded to complete a document</p>
                            </div>
                            <div className="flex  bg-slate-500 p-2 ">
                                <Icon icon="mdi:alert-circle" className="bg-slate-200 rounded text-red-500"  width="30"/>
                                <p className="ml-2 text-white my-auto hover:underline cursor-pointer font-lato">A document of yours has an invalid input</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded md:w-[48%]">
                        <TitleLg>Create a Document</TitleLg>
                        <br/>
                        <div className="flex justify-between">
                            <div className="border-2 border-gray-400 rounded flex flex-col w-[45%] hover:bg-slate-600 cursor-pointer">
                                <div className="mx-auto my-12 text-gray-400 ">
                                    <Icon icon="material-symbols:drive-folder-upload-outline-rounded" className="mx-auto" width="45"/>
                                    <p >Upload a PDF</p>
                                </div>
                            </div>
                            <div className="border-2 border-gray-400 rounded flex flex-col w-[45%] hover:bg-slate-600 cursor-pointer">
                                <div className="mx-auto my-12 text-gray-400 ">
                                    <Icon icon="material-symbols:create-new-folder-outline-rounded" className="mx-auto" width="45"/>
                                    <p >Create from Scratch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;