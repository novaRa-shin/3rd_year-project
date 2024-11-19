import React from "react";

const Card =()=>{
return(<div className="flex flex-row mb-10">
                <div className="max-w-sm  rounded overflow-hidden shadow-lg">
                <div className="bg-violet-400 h-52 border-2 rounded"> </div>
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-1">gii</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis?</p>
                    </div>
                </div>

                <div className="max-w-sm  rounded overflow-hidden shadow-lg">
                    <div className="bg-violet-400 h-52 border-2 rounded"> </div>
                    <div>
                    <div className="font-bold text-xl mb-1">gii</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis?</p>
                    </div>
                </div>

                <div className="max-w-sm  rounded overflow-hidden shadow-lg">
                <div className="bg-violet-400 h-52 border-2 rounded"> </div>
                    <div className="px-1 py-1">
                    <div className="font-bold text-xl mb-1">gii</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis?</p>
                    </div>
                </div>
            

            </div>
)
}

export default Card;