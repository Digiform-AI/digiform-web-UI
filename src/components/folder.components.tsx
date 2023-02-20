import { Icon } from "@iconify/react"


interface folderParams{
    name:string,
    className?:string
}
export const FolderIcon = ({name,className}:folderParams) => {

    return(
        <div className={`w-[150px] my-2 mx-auto bg-slate-500 bg-opacity-20 rounded py-3 hover:bg-opacity-30 cursor-pointer ${className}`}>
            <Icon icon="material-symbols:folder" width="80"  className="mx-auto text-gray-200"/>
            <p className="mx-auto text-gray-200 text-center font-lato">{name}</p>
        </div>
    )
}