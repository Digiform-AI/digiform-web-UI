import { SubTitleLg , TitleXl } from "../components/common.components";


//PDF GEN FILES
import '@react-pdf-viewer/core/lib/styles/index.css';
import { AddFolderIcon, FolderIcon } from "../components/folder.components";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const exampleFolder = {
    name:"Addendum"
}

/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const FileDirectory = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="pt-10">
            {
                (params.file_name || params.add)?(
                    <Outlet />
                ):(
                    <>
                        <div className="w-4/5 bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                            <TitleXl>File Directory</TitleXl>
                        </div>
                        <br/>
                        <div className="w-4/5 mx-auto p-4 rounded">
                            <TitleXl className="mb-4">Company Files</TitleXl>
                            <div className="flex flex-wrap justify-between p-4">
                                <AddFolderIcon 
                                    folder={{
                                        name:"add file"
                                    }}
                                    onClick={()=>{
                                        navigate('add/')
                                    }}
                                />
                                <FolderIcon 
                                    folder={exampleFolder}
                                    onClick={()=>{
                                        navigate('edit/'+exampleFolder.name)
                                    }}
                                />
                                <FolderIcon 
                                    folder={{
                                        name:"Loft Contract"
                                    }}
                                    onClick={()=>{
                                        // navigate('edit/'+exampleFolder.name)
                                    }}
                                />
                                <FolderIcon 
                                    folder={{
                                        name: "New Hire Agreement"
                                    }}
                                    onClick={()=>{
                                        // navigate('edit/'+exampleFolder.name)
                                    }}
                                />
                                <FolderIcon 
                                    folder={{
                                        name: "HIPA Training Letter"
                                    }}
                                    onClick={()=>{
                                        // navigate('edit/'+exampleFolder.name)
                                    }}
                                />
                                <FolderIcon 
                                    folder={{
                                        name: "Release Agreement"
                                    }}
                                    onClick={()=>{
                                        navigate('edit/'+exampleFolder.name)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="w-4/5 mx-auto p-4 rounded">
                            <TitleXl>Assigned Files</TitleXl>
                            <SubTitleLg>FolderIcons of an assigned file and associated members</SubTitleLg>
                            <div className="flex flex-wrap justify-between p-4">
                                <AddFolderIcon 
                                    folder={{
                                        name:"Share File"
                                    }}
                                    onClick={()=>{
                                        
                                    }}
                                />
                                <FolderIcon 
                                    folder={exampleFolder}
                                    onClick={()=>{
                                        navigate('view/'+exampleFolder.name)
                                    }}
                                />
                                <FolderIcon 
                                    folder={{
                                        name: "2022 HIPA for Employees"
                                    }}
                                    onClick={()=>{
                                        navigate('edit/'+exampleFolder.name)
                                    }}
                                />
                                <FolderIcon 
                                    folder={{
                                        name: "105 Wharton Housing Contract"
                                    }}
                                    onClick={()=>{
                                        navigate('edit/'+exampleFolder.name)
                                    }}
                                />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default FileDirectory;