
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