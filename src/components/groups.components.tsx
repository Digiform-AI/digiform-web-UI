
//JUNK DATA - DELETABLE
export const fakeGroupData = [
    {
        name:'Grup 1',
        memberCount:1
    },
    {
        name:'Stup 2',
        memberCount:17
    },
    {
        name:'Drup 3',
        memberCount:69
    },
    {
        name:'Crup 1',
        memberCount:420
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