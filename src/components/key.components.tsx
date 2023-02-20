import { Icon } from "@iconify/react"
import { useState } from "react"
import { LabeledInput, TitleXl } from "./common.components"


export const ItemListKeyRow = ({item}:{item:any}) => {
    return (
        <div className="flex justify-between">
            <p>{item.name}</p>
            <p className="text-gray-700">{item.type}</p>
        </div>
    )
}

export interface key {
    name:string,
    type:string
}

export const fakeKeyData = [
    {
        name:"First Name",
        type:"string"
    },
    {
        name:"Last Name",
        type:"string"
    },
    {
        name:"Birthday",
        type:"string"
    }
]

/** Modal that renders to give context on a key
 * 
 * @param className list of classes to add to this component 
 * @param item the set of data describing the key to render 
 * @param toggleModal a state mutator from the parent that can close this modal
 * @returns a rendered modal describing a key
 */
export const AddKeyModal = ({className,item,toggleModal}:{className:String,item:any|null,toggleModal:any}) => {
    const [name,setName] = useState("");
    const [type,setType] = useState("");

    return (
        <div className={`absolute top-0 left-0 z-[5000] w-full h-full p-10 mx-auto backdrop-blur-md flex ${className}`}>
            <div className="w-4/5 bg-gray-300 h-3/5 mx-auto my-auto rounded-2xl relative overflow-hidden">
                <Icon 
                    icon="ph:x-circle-bold" 
                    className="absolute top-2 right-4 text-white"
                    width="48"
                    onClick={() => {
                        toggleModal(null)
                    }}
                />
                <TitleXl className="p-4 w-full bg-slate-700">Add New Key</TitleXl>
                <div className="w-3/5 mx-auto flex h-full">
                    <div className="flex justify-between w-full my-8">
                        <LabeledInput
                            label="Key Name"
                            state={name}
                            setState={setName}
                        />
                        <LabeledInput
                            label="Key Type"
                            state={type}
                            setState={setType}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}