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
import { createPeople } from "@/store/actions/peopleActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

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
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [profile, setProfile] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");
  const [role, setRole] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [teams, setTeams] = React.useState<string[]>([]);
  const [phone, setPhone] = React.useState<string>("");
  const [workEmail, setWorkEmail] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");
  const [date_of_birth, setDateOfBirth] = React.useState<string>("");
  const [nationality, setNationality] = React.useState<string>("");

  // createPeople
  const handleAddMember = () => {
    console.log("Add Member");
    console.log(name, username, profile, status, role, email, teams);
    setWorkEmail(email);
    dispatch(
      createPeople({
        name,
        username,
        profile,
        status,
        role,
        email,
        teams,
        date_of_birth,
        gender,
        nationality,
        phone,
        work_email: email,
      })
    );
    setName("");
    setUsername("");
    setProfile("");
    setStatus("");
    setRole("");
    setEmail("");
    setTeams([]);
    setPhone("");
    setWorkEmail("");
    setNationality("");
  };

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
                <Input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-1/2">
                <Label>Email</Label>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Username</Label>
                <Input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="w-1/2">
                <Label>Profile</Label>
                <Input
                  onChange={(e) => {
                    setProfile(e.target.value);
                  }}
                  value={profile}
                  type="text"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Gender</Label>
                <Select
                  onValueChange={(value) => {
                    setGender(value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <Label>Date of Birth</Label>
                <Input
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                  value={date_of_birth}
                  type="text"
                  placeholder="Enter DOB"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Phone</Label>
                <Input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="w-1/2">
                <Label>Nationality</Label>
                <Input
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                  value={nationality}
                  type="text"
                  placeholder="Nationality"
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2">
                <Label>Role</Label>
                <Select
                  onValueChange={(value) => {
                    setRole(value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem value="Designer">Designer</SelectItem>
                      <SelectItem value="Developer">Developer</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <Label>Status</Label>
                <Select
                  onValueChange={(value) => {
                    setStatus(value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="w-full">
              <Label>Teams</Label>
              <Input
                onChange={(e) => {
                  setTeams(e.target.value.split(","));
                }}
                value={teams?.join(",")}
                type="text"
                placeholder="Teams (comma separated)"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="uppercase" type="button" variant={"outline"}>
            Cancel
          </Button>
          <Button
            onClick={handleAddMember}
            size={"sm"}
            className="bg-[#6941C6] h-9 hover:bg-[#6941C6]/80 uppercase gap-1 flex items-center"
          >
            <p>Add Member</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePeople;
