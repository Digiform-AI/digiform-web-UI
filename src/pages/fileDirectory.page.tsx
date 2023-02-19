import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { TitleMd, TitleSm, TitleXl } from "../components/common.components";



const fakeMemberData = [
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

interface fakeMember {
    first:String,
    last:String
}

const ItemListMemberRow = ({item,...rest}:{item:fakeMember}) => {
    return (
        <p {...rest}>{item.first} {item.last}</p>
    )
}



interface ItemListParams {
    items:any,
    addItemModal:any,
    ItemComponent:any,
}

const ItemList = ({items,addItemModal,ItemComponent}:ItemListParams) => {
    const [displaySearch,setDisplaySearch] = useState(false);

    console.log(items);
    
    return (
        <div className="rounded bg-gray-400">
            <div className="bg-gray-700 text-white flex justify-between p-2">
                <TitleMd>Members</TitleMd>

                <div className="flex">
                    <Icon 
                        icon="material-symbols:search-rounded" 
                        width="22" 
                        className="my-auto mr-2 hover:scale-110 transition-transform transform cursor-pointer"
                        onClick={()=> {
                            displaySearch?setDisplaySearch(false):setDisplaySearch(true);
                            document.getElementById("member-search")?.focus();
                        }}
                    />
                    <Icon 
                        icon="material-symbols:add-box-outline-rounded" 
                        width="22" 
                        className="my-auto hover:scale-110 transition-transform transform cursor-pointer"
                        onClick={()=>{
                            console.log("show me the modal");
                        }}
                    />
                </div>
            </div>

            {/* search bar */}
            <div className={`overflow-hidden transition-height  ${displaySearch?'h-6':'h-0'}`}>
                <input 
                    id="member-search"
                    className={`w-full px-2 border-0 text-left bg-gray-600 text-white`}
                    placeholder="filter..."
                />
            </div>

            {/* LIST OF MEMBAS */}
            <div className="p-2 font-lato">
                {
                    items.map((item:any) => {
                        return(
                            <ItemComponent 
                                item={item} 
                                className="p-1 hover:scale-105 transition-all transform cursor-pointer"
                                onClick={() => {
                                    console.log(item)
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


/** File Direrctory Page
 * 
 * @returns the rendered file directory page
 */
const FileDirectory = () => {
    const [members,setMembers] = useState(Array<fakeMember>);

    useEffect(() => {
        //GET members
        setMembers(fakeMemberData);
    },[])

    return (
        <div className="pt-10">
            <div className="w-4/5 bg-slate-100 dark:bg-slate-700 mx-auto p-4 rounded">
                <TitleXl>Files</TitleXl>
            </div>
            <div className="w-4/5 mx-auto">

                <div className="flex mt-8">
                    <div className="w-full sm:w-1/2 md:w-1/5 transition-width rounded-md overflow-hidden">
                        <ItemList items={members} addItemModal={null} ItemComponent={ItemListMemberRow}/>

                    </div>

                    <div>


                    </div>

                    <div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileDirectory;