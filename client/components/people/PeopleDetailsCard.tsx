"use client";
import React from "react";
import { IPeople } from "./PeopleTable";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { IconArrowUpRight } from "@tabler/icons-react";

interface PeopleDetailsCardProps {
  data: {
    name: string;
    username: string;
    profile: string;

    status: string;
    role: string;
    email: string;
    teams: string[];
  };
  className?: string;
}

const PeopleDetailsCard: React.FC<PeopleDetailsCardProps> = ({
  data,
  className,
}: any) => {
  return (
    <div className={`${className} overflow-x-auto`}>
      <div className="bg-[#2A5B7E] text-white p-6 rounded-t-lg flex items-center">
        <img className="w-20 rounded-full mr-6" src={data.profile} alt="" />
        <div>
          <h1 className="mb-2 text-lg font-bold">{data.name}</h1>
          <div className="flex">
            <p className="border-r-2 pr-4">
              @{data.username}
              <br />
              <span className="text-xs">user ID</span>
            </p>
            <p className="pl-4">
              {data.role}
              <br />
              <span className="text-xs">Role</span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h1 className="bg-[#EFF5FA] px-2 py-1 rounded-md">
          Personal Information
        </h1>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Date of Birth</TableCell>
              <TableCell>29-04-2005</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gender</TableCell>
              <TableCell>Female</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nationality</TableCell>
              <TableCell>Canadian</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Contact no.</TableCell>
              <TableCell>1234567890</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E-mail Address</TableCell>
              <TableCell>{data.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Work email Address</TableCell>
              <TableCell>Female</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h1 className="bg-[#EFF5FA] px-2 py-1 rounded-md mt-4 mb-2">
          Research & Publication
        </h1>
        <div className="text-xs">
          <p className="mb-1 font-bold">
            AI and User Experience: The Future of Design
          </p>
          <p className="mb-1 text-gray-500">
            Published in the Journal of Modern Design • 2022
          </p>
          <p className="mb-1">
            AI, IoT based real time condition monitoring of Electrical Machines
            using Python language Abstract: Maintaining induction motors in good
            working order before they fail benefits small{" "}
            <span className="text-[#F15A22] cursor-pointer">See More...</span>
          </p>
        </div>
        <p className="text-[#F15A22] pt-2 flex items-center gap-2 cursor-pointer">
          <IconArrowUpRight />
          SEE PUBLICATION
        </p>
      </div>
    </div>
  );
};

export default PeopleDetailsCard;
