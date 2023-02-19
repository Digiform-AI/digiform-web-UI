import { useEffect } from "react"

//JUNK DATA - DELETABLE
export const fakeMemberData = [
    {
        first:'Doug',
        last:'Flenderson'
    },
    {
        first:'Steve',
        last:'Venhanderbilt'
    },
    {
        first:'Mary',
        last:'Commy'
    },
    {
        first:'John',
        last:'Jonjonson'
    }
]

export interface fakeMember {
    first:String,
    last:String
}


export const ItemListMemberRow = ({item,...rest}:{item:fakeMember}) => {
    return (
        <p {...rest}>{item.first} {item.last}</p>
    )
}

export const MemberDataModal = ({className,item,toggleModal}:{className:String,item:any|null,toggleModal:any}) => {

    useEffect(() => {
        console.log(item)
    },[])

    return (
        <div className={`absolute top-0 left-0 z-[5000] w-full h-full p-10 mx-auto backdrop-blur-md ${className}`}>
            <div className="w-4/5 bg-gray-300 h-4/5 mx-auto my-auto rounded-2xl relative">
                <p
                    className="absolute top-2 right-4"
                    onClick={() => {
                        toggleModal(null)
                    }}
                >X</p>
            </div>
        </div>
    )
}