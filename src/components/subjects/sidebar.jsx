// src/components/Sidebar.jsx

import React, { useState } from 'react';

const Sidebar = () => {
  // State to toggle the sidebar open/close
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? 'w-64' : 'w-44'
        } h-screen  text-black transition-width duration-300`}
      >
        <div className="flex ml-14 items-center pt-4">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl focus:outline-none"
          >
            Subjects
          </button>
          
        </div>

        {/* Sidebar Links */}
        <ul className="mt-4">
          <li className="p-4 ml-16 hover:bg-gray-700 cursor-pointer">
            <span className={`${!isOpen ? 'hidden' : ''}`}>Home</span>
          </li>
          <li className="p-4  ml-16 hover:bg-gray-700 cursor-pointer">
            <span className={`${!isOpen ? 'hidden' : ''}`}>About</span>
          </li>
          <li className="p-4  ml-16 hover:bg-gray-700 cursor-pointer">
            <span className={`${!isOpen ? 'hidden' : ''}`}>Contact</span>
          </li>
          <li className="p-4  ml-16 hover:bg-gray-700 cursor-pointer">
            <span className={`${!isOpen ? 'hidden' : ''}`}>Settings</span>
          </li>
        </ul>
      </div>

      
      <div className="w-1 bg-violet-400 min-h-full border-2 border-violet-400 my-6">

      </div>

      {/* Main Content Area */}
      <div className="flex-1 pl-10 m-10">
        <h2 className="text-2xl font-bold">Main Content</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, voluptatibus accusantium quisquam cum illum dolore earum! Dolores corrupti voluptate iure veniam porro facilis inventore, voluptates nam distinctio quae, officiis fugit commodi. Laboriosam eos nemo repudiandae quo. Nam, pariatur nul
          la dolores veritatis aspernatu
          r molestiae ut enim reiciendis repudiandae laudantium voluptatum atque incidunt minima obcaecati ad, porro harum. Modi iure blanditiis, hic et illum aliquam dolore ducimus natus eos nesciunt omnis quae, eveniet voluptatem error, quas est temporibus laborum veritatis ratione! Magni cupiditate molestiae eius ea
          que labore illum, in vel quidem magnam iure maiores ex at facilis, dolores sint! Perspiciatis est voluptatum ipsum error et tenetur animi, dolores quis! Voluptatum harum dolore delectus sequi quo cupiditate quasi, enim est pariatur consequuntur ab, voluptas aliquam maior
          es sapiente nulla necessitatibus inventore! Consectetur non porro ipsa ratione asperiores deserunt earum quod, eveniet at ex mollitia magnam quibusdam eius dignissimos placeat alias saepe beatae quia sapiente labore est nesciunt tempore! Fugiat ipsa recusandae dolorum expedita
           architecto neque veritatis eveniet obcaecati, corrupti illum totam quibusdam ex. Repudiandae eius at reiciendis doloribus corrupti eum, quo libero iusto laudantium id error eaque aperiam ut modi et nisi incidunt labore. Architecto incidunt libero eligendi quam ipsam id tempore recusandae officia!
          Here is where your main content will go. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet minima porro vitae reprehenderit sit tempora soluta consectetur impedit praesentium enim optio mollitia quas autem pariatur quaerat voluptate quod, iste fugiat.</p>
      </div>
    </div>
  );
};

export default Sidebar;
