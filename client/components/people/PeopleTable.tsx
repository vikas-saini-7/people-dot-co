import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  IconPointFilled,
  IconTrash,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import PeopleEditDialog from "./PeopleEditDialog";

export interface IPeople {
  data: {
    name: string;
    username: string;
    profile: string;

    status: string;
    role: string;
    email: string;
    teams: string[];
  }[];
  className?: string;
}

const PeopleTable: React.FC<IPeople> = ({ data }) => {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email address</TableHead>
          <TableHead>Teams</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data, idx) => (
          <TableRow
            key={idx}
            className={`${idx % 2 == 0 ? "bg-gray-50" : ""} `}
          >
            <TableCell>
              <div className="flex items-center gap-2 pr-12">
                <img
                  src={data.profile}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold whitespace-nowrap">{data.name}</p>
                  <p className="text-gray-500 text-sm">@{data.username}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <p className="flex items-center w-fit border-2 font-semibold bg-white px-1 rounded-lg">
                <span className="text-[#17B26A]">
                  <IconPointFilled size={16} />
                </span>
                {data.status}
              </p>
            </TableCell>
            <TableCell>{data.role}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.teams}</TableCell>
            <TableCell className="whitespace-nowrap">
              <button className="inline lg:mr-6 mr-4">
                <IconTrash />
              </button>
              {/* <button className="">
                <IconPencil />
              </button> */}
              <PeopleEditDialog data={data} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PeopleTable;
