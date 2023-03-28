import { Icon } from "@iconify/react"

//JUNK DATA - DELETABLE
export const fakeGroupData = [
    {
        name:'Dev Team',
        memberCount:12
    },
    {
        name:'QA',
        memberCount:7
    },
    {
        name:'Execs',
        memberCount:6
    }
]

export interface fakeGroup {
    name:String,
    memberCount:number
}


export const ItemListGroupRow = ({item,...rest}:{item:fakeGroup}) => {
    return (
        <div className="flex justify-between">
            <p {...rest}>{item.name}</p>
            <p>{item.memberCount}</p>
        </div>
    )
}

interface groupParams{
    name:string,
    
}
export const AddGroupIcon = ({group,className,onClick}:{group:groupParams,className?:string,onClick?:any}) => {
    return(
        <div className={`w-[150px] my-2 mx-auto bg-slate-500 bg-opacity-20 rounded py-3 hover:bg-opacity-30 cursor-pointer ${className}`} onClick={onClick}>
            <Icon icon="material-symbols:group-add-outline-rounded" width="80"  className="mx-auto text-gray-200"/>
            <p className="mx-auto text-gray-200 text-center font-lato">{group.name}</p>
        </div>
    )
}