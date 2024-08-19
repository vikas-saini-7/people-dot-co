import React from "react";
import Link from "next/link";
import { IconHome } from "@tabler/icons-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[20%] lg:w-[15%] h-[calc(100vh-70px)] space-y-3 py-4">
      <Link href="/" className={`flex items-center gap-2`}>
        {/* <IconHome /> */}
        <p>Overview</p>
      </Link>
      <Link href="/people" className={`flex items-center gap-2`}>
        {/* <IconHome /> */}
        <p>People Directory</p>
      </Link>
    </div>
  );
};

export default Sidebar;
