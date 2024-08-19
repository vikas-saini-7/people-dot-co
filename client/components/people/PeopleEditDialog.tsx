"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconPencil, IconReload } from "@tabler/icons-react";

interface PeopleEditDialogProps {
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

const PeopleEditDialog: React.FC<PeopleEditDialogProps> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline">
          <IconPencil />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Profile</DialogTitle>
        </DialogHeader>
        <div>
          <div className="text-center">
            <img src={data.profile} alt="profile" />
            <div className="space-x-2">
              <Button
                size={"sm"}
                variant={"outline"}
                className="uppercase font-semibold"
              >
                <IconReload size={18} />
                <span className="ml-2">Change Photo</span>
              </Button>
              <Button
                size={"sm"}
                variant={"outline"}
                className="uppercase font-semibold"
              >
                <IconReload size={18} />
                <span className="ml-2">Remove Photo</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Name</Label>
                <Input
                  defaultValue={data.name}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-1/2">
                <Label>Email</Label>
                <Input
                  defaultValue={data.email}
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Role</Label>
                <Input
                  defaultValue={data.role}
                  type="text"
                  placeholder="Role"
                />
              </div>
              <div className="w-1/2">
                <Label>Status</Label>
                <Input
                  defaultValue={data.status}
                  type="text"
                  placeholder="Status"
                />
              </div>
            </div>

            <div className="w-full">
              <Label>Teams</Label>
              <Input type="text" placeholder="John Doe" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="uppercase" type="submit" variant={"outline"}>
            Cancel
          </Button>
          <Button
            className="uppercase"
            type="submit"
            variant={"outline"}
            disabled
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PeopleEditDialog;