import React from "react";
import PeopleDetailsCard from "@/components/people/PeopleDetailsCard";
import PeopleHeader from "@/components/people/PeopleHeader";
import PeopleTable from "@/components/people/PeopleTable";

const data = [
  {
    username: "johndoe",
    name: "John Doe",
    role: "Product Designer",
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    status: "Active",
    email: "john@gmail.com",
    date_of_birth: "1990-01-01",
    gender: "Male",
    Nationality: "Indian",
    phone: "1234567890",
    work_email: "john@gmail.com",
    teams: ["Design", "Product", "Marketing"],
  },
  {
    name: "John Doe",
    username: "johndoe",
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    status: "Active",
    role: "Product Designer",
    teams: ["Design", "Product", "Marketing"],
    email: "john@gmail.com",
  },
  {
    name: "John Doe",
    username: "johndoe",
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    status: "Active",
    role: "Product Designer",
    teams: ["Design", "Product", "Marketing"],
    email: "john@gmail.com",
  },
  {
    name: "John Doe",
    username: "johndoe",
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    status: "Active",
    role: "Product Designer",
    teams: ["Design", "Product", "Marketing"],
    email: "john@gmail.com",
  },
  {
    name: "John Doe",
    username: "johndoe",
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    status: "Active",
    role: "Product Designer",
    teams: ["Design", "Product", "Marketing"],
    email: "john@gmail.com",
  },
];

const page: React.FC = () => {
  return (
    <main className="mt-2 border rounded-lg min-h-[calc(100vh-120px)] relative">
      <PeopleHeader />
      <PeopleTable data={data} />
      <PeopleDetailsCard
        className=" bg-white absolute top-0 right-0 w-[68%] h-full shadow-lg rounded-lg"
        data={data[0]}
      />
    </main>
  );
};

export default page;
