import { IconBell } from "@tabler/icons-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-red-500">
      <div className="h-[88px] container flex items-center justify-between">
        <h1>PEOPLE.CO</h1>
        <div>
          <div>
            <IconBell />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
