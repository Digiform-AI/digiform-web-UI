import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { TitleLg, TitleMd, TitleSm } from "./common.components"




export const Nav = () => {
    const [navOpen,setNavOpen] = useState()




    return (
        <>
            <Icon icon="fa:navicon" className="absolute top-2 left-2 text-white" width="32" onClick={() => setNavOpen(true)}/>
            <div className={`z-1 absolute top-0 left-0 h-full bg-slate-400 bg-opacity-10 ${navOpen?'w-full':'w-0'}`} onClick={()=>setNavOpen()}></div>

            <nav className={`z-[150] bg-gray-700 h-screen w-1/4 p-4 absolute transition-all transform ${navOpen?'':'-translate-x-full'}`}>
                <TitleLg>DigiForm</TitleLg>
                <Icon icon="material-symbols:arrow-circle-left-outline-rounded" className="absolute top-2 right-2 text-white" width="32" onClick={() => setNavOpen()}/>
                

                <div>
                    <TitleMd>Directory</TitleMd>
                    <div className="hover:bg-gray-300">
                        <Link to="/" onClick={()=>setNavOpen()}>
                            <TitleSm >Home</TitleSm>
                        </Link>
                    </div>
                    <div className="hover:bg-gray-300">
                        <Link to="/files" onClick={()=>setNavOpen()}>
                            <TitleSm >Files</TitleSm>
                        </Link>
                    </div>
                    <div className="hover:bg-gray-300">
                        <Link to="/customers" onClick={()=>setNavOpen()}>
                            <TitleSm >Customers</TitleSm>
                        </Link>
                    </div>
                    <div className="hover:bg-gray-300">
                        <Link to="/examples" onClick={()=>setNavOpen()}>
                            <TitleSm >Samples</TitleSm>
                        </Link>
                    </div>
                </div>
            </nav>
            
        </>
    )
}