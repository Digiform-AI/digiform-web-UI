import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import { TitleMd, TitleXl } from "./common.components"

//JUNK DATA - DELETABLE
export const fakeMemberData = [
    {
        first:'Doug',
        last:'Flenderson',
        status:3
    },
    {
        first:'Steve',
        last:'Venhanderbilt',
        status:2
    },
    {
        first:'Mary',
        last:'Commiera',
        status:3
    },
    {
        first:'John',
        last:'Jonjonson',
        status:1
    },
    {
        first:'Paul',
        last:'Vanderbilt',
        status:1
    },
    {
        first:'Steve',
        last:'Sanders',
        status:1
    },
    {
        first:'Susie',
        last:'Fuster',
        status:1
    }
]

export interface fakeMember {
    first:String,
    last:String,
    status:number
}


export const MemberCardSm = ({member,...rest}:{member:fakeMember}) => {
    const [viewModal,setViewModal] = useState()


    return (
        <div className="bg-slate-400 p-4 md:w-[40%] min-w-[400px] my-4 rounded flex" >
            {/* <img src={`https://robohash.org/${member.first}`} className="rounded-xl bg-white w-1/3" /> */}
            <img src={`https://eu.ui-avatars.com/api/?name=${member.first}+${member.last}&size=150`} className="rounded-xl bg-white w-1/4" />
            
            <div className="px-2">
                <p className="text-2xl font-light">{member.first} {member.last}</p>
                <p className="lowercase">{member.first}{member.last}@gmail.com</p>
            </div>
        </div>
    )
}


export const ItemListMemberRow = ({item,...rest}:{item:fakeMember}) => {

    const [icon,setIcon] = useState()

    //success
    if(item.status === 1){

    }
    //error
    else if(item.status === 2){

    }
    //incomplete
    else {

    }

    return (
        <div className="flex">
            <p {...rest}>{item.first} {item.last}</p> 
            <Icon icon=""/>
        </div>
    )
}

/** Modal that renders to give context on a member and their associated forms
 * 
 * @param className list of classes to add to this component 
 * @param item the set of data describing the member to render 
 * @param toggleModal a state mutator from the parent that can close this modal
 * @returns a rendered modal describing a member
 */
export const MemberDataModal = ({className,item,toggleModal}:{className:String,item:any|null,toggleModal:any}) => {

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
                <TitleXl className="p-4 w-full bg-slate-700">Member Data</TitleXl>
                <div className="h-full overflow-scroll">
                    <div className="flex w-4/5 mx-auto my-8">
                        <div>
                            <img src={`https://robohash.org/${item.first}`} className="rounded-xl bg-white" />
                            {/* <img src="https://i.pravatar.cc/300" className="rounded" /> */}
                        </div>
                        <div className="px-6 w-full">
                            <p className="text-6xl font-lato">{item.first} {item.last}</p>
                            <p className="text-3xl font-light my-4 font-lato">Member of COMPANY_NAME</p>
                            <hr className="border-gray-500 border-2"/>
                            <div className="flex justify-between">
                                <p className="text-3xl text-gray-700 my-4 font-lato">Email</p>
                                <p className="text-3xl font-light my-4 font-lato">{item.first}{item.last}@gmail.com</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-3xl text-gray-700 my-4 font-lato">Phone</p>
                                <p className="text-3xl font-light my-4 font-lato">(203)378-5858</p>
                            </div>
                        </div>
                    </div>
                    {/* TABLE - SOOON TO BE SEPARATED INTO COMPONENT */}
                    <div className="border border-slate-500 w-4/5 mx-auto rounded overflow-clip">
                        <div className="bg-slate-600 flex justify-evenly p-2">
                            <p className="text-white text-xl font-bold font-lato w-1/4 text-center">File</p>
                            <p className="text-white text-xl font-bold font-lato border-l-2 w-1/4 text-center">Assigned On</p>
                            <p className="text-white text-xl font-bold font-lato border-l-2 w-1/4 text-center">Completion</p>
                            <p className="text-white text-xl font-bold font-lato border-l-2 w-1/4 text-center">Completed On</p>
                        </div>
                        <div className="p-2 flex justify-evenly bg-white">
                            <p className="font-lato text-lg underline w-1/4 overflow-ellipsis text-center cursor-pointer">document.pdf</p>
                            <p className="font-lato text-lg w-1/4 overflow-ellipsis text-center">June 6, 2022</p>
                            <Icon icon="emojione:white-heavy-check-mark" className="font-lato text-lg w-1/4 overflow-ellipsis text-center" width="24"/>
                            <p className="font-lato text-lg w-1/4 overflow-ellipsis text-center">June 10, 2022</p>
                        </div>
                        <div className="p-2 flex justify-evenly border-t bg-blue-100">
                            <p className="font-lato text-lg underline w-1/4 overflow-ellipsis text-center cursor-pointer">example.pdf</p>
                            <p className="font-lato text-lg w-1/4 overflow-ellipsis text-center">June 8, 2022</p>
                            <Icon icon="ph:x-circle-fill" className="font-lato text-lg w-1/4 overflow-ellipsis text-red-500 text-center" width="26"/>
                            <p className="font-lato text-lg w-1/4 overflow-ellipsis text-center text-blue-500 underline cursor-pointer">send reminder</p>
                        </div>
                        <div className="p-2 flex justify-evenly bg-white">
                            <p className="font-lato text-lg underline w-1/4 overflow-ellipsis text-center cursor-pointer">contract.pdf</p>
                            <p className="font-lato text-lg w-1/4 overflow-ellipsis text-center">June 12, 2022</p>
                            <Icon icon="uis:exclamation-circle" className="w-1/4 text-yellow-500" width="26"/>
                            <p className="font-lato text-lg w-1/4 overflow-ellipsis text-center text-blue-500 underline cursor-pointer">troubleshoot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}