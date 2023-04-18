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
        name:"Key",
        type:"string"
    },
    {
        name:"test",
        type:"string"
    },
    {
        name:"value",
        type:"string"
    }
]


const InputField = ({field, listState, setListState}:{field:any, listState:Array<any>, setListState:any}) => {
    const [label, setLabel] = useState(field.label)
    const [options, setOptions] = useState(field.option)
    const [values, setValues] = useState(field.values)

    function updateList(){
        listState.forEach(item => {
            if(item.id === field.id){
                item.label = label;
                item.options = options;
                item.values = values;
            }
        })
        setListState(listState)
    }

    function deleteFromList(){
        const newList = listState.filter(item => item.id !== field.id)
        setListState(newList)
    }

    return (
        <div className="border flex justify-between relative" id={field.id}>
            <input className="text-center mx-auto border-r border-gray-500 w-1/3" 
                onChange={(e) => {
                    setLabel(e.target.value)
                }}
                onBlur={updateList}
            />
            <select className="text-center mx-auto w-1/3" defaultValue={'C'} 
                onChange={(e) => {
                    setOptions(e.target.value)
                }}
                onBlur={updateList}
            >
                <option value='T'>Text</option>
                <option value='MS'>Multi Select</option>
                <option value='C'>Checkbox</option>
            </select>
            <input className="text-center mx-auto border-l border-gray-500 w-1/3" 
                onChange={(e) => {
                    setValues(e.target.value)
                }}
                onBlur={updateList}
            />
            <div className="absolute left-full">
                <Icon icon="ph:x-circle" className="my-auto" onClick={deleteFromList}/>
            </div>
        </div>
    )
}

/** Modal that renders to give context on a key
 * 
 * @param className list of classes to add to this component 
 * @param item the set of data describing the key to render 
 * @param toggleModal a state mutator from the parent that can close this modal
 * @returns a rendered modal describing a key
 */
export const AddKeyModal = ({className,item,toggleModal}:{className:String,item:any|null,toggleModal:any}) => {
    const [fields,setFields] = useState<any>([])

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
                <TitleXl className="p-4 w-full bg-slate-700">Create file from keys</TitleXl>
                <div>
                    <div className="border w-4/5 mx-auto my-6 rounded">
                        <div className="border flex justify-between">
                            <p className="text-center mx-auto border-r w-1/3">label</p>
                            <p className="text-center mx-auto w-1/3">type</p>
                            <p className="text-center mx-auto w-1/3 border-l">options</p>
                        </div>
                        {
                            fields?.map((field:any,index:BigInteger) => {
                                return (
                                    <InputField key={`${Date.now}-${index}`} field={field} listState={fields} setListState={setFields}/>
                                )
                            })
                        }
                        <Icon 
                            icon='material-symbols:add-circle-rounded' width='30' className="text-slate-500 mx-auto my-2" 
                            onClick={()=> setFields([...fields, { id:(Math.random() + Date.now()), label:'', type:'', options:'' }])} />
                    </div>
                    <button 
                        className="border-0 rounded bg-blue-200 p-4 text-lg mx-auto font-bold block"
                        onClick={() => console.log(fields)}
                    >confirm</button>
                </div>
            </div>
        </div>
    )
}