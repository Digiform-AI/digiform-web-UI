import { SubTitleLg , TitleXl } from "../components/common.components";


//PDF GEN FILES
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FolderIcon } from "../components/folder.components";
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
            <div className="w-4/5 bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>File Directory</TitleXl>
            </div>
            {
                params.file_name?(
                    <Outlet />
                ):(
                    <>
                        
                        <br/>
                        <div className="w-4/5 mx-auto p-4 rounded">
                            <TitleXl className="mb-4">Company Files</TitleXl>
                            <div className="flex flex-wrap justify-between p-4">
                                <FolderIcon 
                                    folder={exampleFolder}
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
                                <FolderIcon 
                                    folder={exampleFolder}
                                    onClick={()=>{
                                        navigate('view/'+exampleFolder.name)
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