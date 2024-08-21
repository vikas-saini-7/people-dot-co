import React from "react";
import { Button } from "@/components/ui/button";
import { IconFilter, IconPlus, IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import CreatePeople from "./CreatePeople";

interface PeopleHeaderProps {
  peopleCount: number;
}

const PeopleHeader: React.FC<PeopleHeaderProps> = ({ peopleCount }) => {
  const status = useSelector((state: RootState) => state.people.status);
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-lg">Team members</h1>
        <p className="border text-purple-700 font-semibold border-purple-600 rounded-full px-2 bg-purple-600/10 text-xs">
          {status === "loading" ? "Loading..." : `${peopleCount} people`}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Input
            className="h-9 border border-b-2 border-b-black/60 rounded-none"
            placeholder="Search"
          />
          <IconSearch
            size={18}
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500"
          />
        </div>
        <div className="cursor-pointer px-2 hover:bg-gray-100 h-9 flex items-center justify-center rounded-md">
          <IconFilter />
        </div>
        <CreatePeople />
      </div>
    </div>
  );
};

export default PeopleHeader;
