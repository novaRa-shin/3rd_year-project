import React from "react";
import Card from "./cards";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full min-h-screen bg-gray-100">
            {/* Top Section */}
            <div className="w-full min-h-screen bg-violet-200 shadow-xl flex flex-col justify-center items-center pt-24">
                <h1 className="font-black text-4xl md:text-6xl lg:text-9xl p-5 shadow-sm">Hello</h1>
                <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl p-5 shadow-sm">
                    Welcome to the Classroom
                </h2>
                {/* Uncomment and update the path for the image */}
                {/* <img src="/images/1.png" alt="Classroom" className="mt-5 w-full max-w-md md:max-w-lg lg:max-w-xl" /> */}
            </div>

            {/* Spacer Section */}
            <div className="min-h-36" />

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-5 w-full px-5">
                <Card />
                <Card />
            </div>

            {/* Spacer Section */}
            <div className="min-h-36" />

            {/* Footer Section */}
            <div className="w-full min-h-20 bg-violet-800 flex justify-center items-center">
                {/* You can add footer content here */}
            </div>
        </div>
    );
};

export default Home;

