"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconPointFilled, IconTrash } from "@tabler/icons-react";
import PeopleEditDialog from "./PeopleEditDialog";
import { setActivePeople } from "@/store/reducers/peopleReducer";
import { deletePeople } from "@/store/actions/peopleActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

export interface IPeople {
  data: {
    _id?: string;
    name: string;
    username: string;
    profile: string;
    status: string;
    role: string;
    email: string;
    teams: string[];
  }[];
  className?: string;
  setIsDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleActivePeople: any;
}

const PeopleTable: React.FC<IPeople> = ({
  data,
  setIsDetailsVisible,
  handleActivePeople,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleShowDetails = (data: any) => {
    console.log("Show details");
    setIsDetailsVisible(true);
    handleActivePeople(data);
  };

  const handleDelete = (id: string) => {
    dispatch(deletePeople(id));
  };
  return (
    <Table>
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
        {data?.map((data, idx: number) => (
          <TableRow
            onClick={() => handleShowDetails(data)}
            key={idx}
            className={`${idx % 2 === 0 ? "bg-gray-50" : ""} cursor-pointer`}
          >
            <TableCell>
              <div className="flex items-center gap-2 pr-12">
                <div className="w-8 h-8">
                  <img
                    src={data?.profile}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold whitespace-nowrap">
                    {data?.name}
                  </p>
                  <p className="text-gray-500 text-sm">@{data?.username}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <p className="flex items-center w-fit border-2 font-semibold bg-white px-1 rounded-lg">
                <span className="text-[#17B26A]">
                  <IconPointFilled size={16} />
                </span>
                {data?.status}
              </p>
            </TableCell>
            <TableCell>{data?.role}</TableCell>
            <TableCell>{data?.email}</TableCell>
            <TableCell>{data?.teams?.join(", ")}</TableCell>
            <TableCell
              className="whitespace-nowrap"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="inline lg:mr-6 mr-4"
                onClick={() => handleDelete(data?._id!)}
              >
                <IconTrash />
              </button>
              <PeopleEditDialog data={data} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PeopleTable;
