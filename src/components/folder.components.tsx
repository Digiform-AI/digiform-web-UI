import { Icon } from "@iconify/react"


interface folderParams{
    name:string,
    
}
export const FolderIcon = ({folder,className,onClick}:{folder:folderParams,className?:string,onClick:any}) => {

    return(
        <div className={`w-[150px] my-2 mx-auto bg-slate-500 bg-opacity-20 rounded py-3 hover:bg-opacity-30 cursor-pointer ${className}`} onClick={onClick}>
            <Icon icon="material-symbols:folder" width="80"  className="mx-auto text-gray-200"/>
            <p className="mx-auto text-gray-200 text-center font-lato">{folder.name}</p>
        </div>
    )
}