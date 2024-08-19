import { IconBell } from "@tabler/icons-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="border-b">
      <div className="container flex items-center justify-between h-[69px]">
        <h1 className="font-bold text-3xl text-[#6941C6]">PEOPLE.CO</h1>
        <div className="flex items-center gap-4">
          <div>
            <IconBell size={20}/>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-8 rounded-full" src="https://imgcdn.stablediffusionweb.com/2024/5/2/81328692-c85f-4e08-9c01-f8f9f49fb291.jpg" alt="" />
            <p>Jane Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
