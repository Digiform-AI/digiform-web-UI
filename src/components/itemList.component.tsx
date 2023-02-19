import { Icon } from "@iconify/react";
import { useState } from "react";
import { TitleMd } from "../components/common.components";

interface ItemListParams {
    className?:String|null,
    items:any,
    AddItemModal:any,
    ViewItemModal:any,
    ItemComponent:any,
}

export const ItemList = ({className,items,AddItemModal,ViewItemModal,ItemComponent}:ItemListParams) => {
    const [displaySearch,setDisplaySearch] = useState(false);

    // view item control state
    const [viewItemState,setViewItemState] = useState(null);
    
    return (
        <>
            {
                viewItemState?
                    ViewItemModal?
                        <ViewItemModal className={` ${viewItemState?'block':'hidden'}`} item={viewItemState} toggleModal={setViewItemState} />
                    :<></>
                :<></>
            }

            <div className={`rounded bg-gray-400 ${className}`}>
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
                                        console.log('clickster')
                                        setViewItemState(item)
                                        console.log(item)
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}