import React from "react";
import Card from "./cards";

const Classroom = () => {
    return (
        <div className="min-w-screen min-h-screen bg-violet-100 flex justify-center mt-10 pt-10">
            <div className="text-center">
                <h1 className="font-bold text-6xl text-gray-700 mb-4">Classroom</h1>
                
                
                <hr className="w-3/4 mx-auto border-t-2 border-gray-400 mb-6" />
                
                
                <Card />

                <hr className="w-3/4 mx-auto border-t-2 border-gray-400 mb-6" />
                
                
                <Card />

                <hr className="w-3/4 mx-auto border-t-2 border-gray-400 mb-6" />
                
                
                <Card />
            </div>
        </div>
    );
}

export default Classroom;
