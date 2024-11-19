import React from "react";


import Sidebar from "./subjects/sidebar";

const Notes=()=>{
    return(
        <div className="w-screen h-screen  flex  justify-center flex-col mt-10 pt-10">

            <div className="mt-14 pt-14 flex">
            <h1 className="font-bold text-6xl p-2 m-1">Notes</h1>
            <hr className="w-3/4 border-t-4 border-violet-400 my-10" />
            </div>

            <div>

                
                <Sidebar/>
                    
                

            </div>

            
        </div>
    )
}

export default Notes;