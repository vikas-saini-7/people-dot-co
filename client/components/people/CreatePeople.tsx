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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconPencil, IconPlus, IconReload } from "@tabler/icons-react";

// interface IPeople {
//   name: string;
//   username: string;
//   profile: string;
//   status: string;
//   role: string;
//   email: string;
//   teams: string[];
// }

const CreatePeople: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [profile, setProfile] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");
  const [role, setRole] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [teams, setTeams] = React.useState<string[]>([]);
  const [phone, setPhone] = React.useState<string>("");
  const [workEmail, setWorkEmail] = React.useState<string>("");
  const [nationality, setNationality] = React.useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"sm"}
          className="bg-[#6941C6] h-9 hover:bg-[#6941C6]/80 uppercase gap-1 flex items-center"
        >
          <IconPlus size={18} />
          <p>Add Member</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Add Member</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex flex-col items-center gap-6"></div>
          <div className="space-y-4 mt-4">
            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Name</Label>
                <Input defaultValue={name} type="text" placeholder="Name" />
              </div>
              <div className="w-1/2">
                <Label>Email</Label>
                <Input defaultValue={email} type="text" placeholder="Email" />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Username</Label>
                <Input
                  defaultValue={username}
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="w-1/2">
                <Label>Profile</Label>
                <Input
                  defaultValue={profile}
                  type="text"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Phone</Label>
                <Input defaultValue={phone} type="text" placeholder="Phone" />
              </div>
              <div className="w-1/2">
                <Label>Nationality</Label>
                <Input
                  defaultValue={nationality}
                  type="text"
                  placeholder="Nationality"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Role</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem value="apple">Designer</SelectItem>
                      <SelectItem value="banana">Developer</SelectItem>
                      <SelectItem value="blueberry">Manager</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="apple">Active</SelectItem>
                      <SelectItem value="banana">InAvtive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="w-full">
              <Label>Teams</Label>
              <Input type="text" placeholder="" />
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

export default CreatePeople;
