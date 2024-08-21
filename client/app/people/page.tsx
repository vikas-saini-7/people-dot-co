"use client";
import React, { useRef, useState } from "react";
import PeopleDetailsCard from "@/components/people/PeopleDetailsCard";
import PeopleHeader from "@/components/people/PeopleHeader";
import PeopleTable from "@/components/people/PeopleTable";
import { useSelector, useDispatch } from "react-redux";
import useClickOutside from "@/hooks/useClickOutside";
import { fetchPeople } from "@/store/actions/peopleActions";
import { RootState, AppDispatch } from "@/store/store";
import { IPeople } from "@/store/reducers/peopleReducer";

const Page: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const people = useSelector((state: RootState) => state.people.list);
  // const activePeople = useSelector(
  //   (state: RootState) => state.people.activePeople
  // );
  const [active, setActive] = useState<IPeople | null>(null);

  const [isDetailsVisible, setIsDetailsVisible] =
    React.useState<boolean>(false);
  const detailsCardRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // console.log(activePeople)
    dispatch(fetchPeople());
  }, [dispatch]);

  useClickOutside(detailsCardRef, () => setIsDetailsVisible(false));

  const handleActivePeople = (data: IPeople) => {
    console.log("Done");
    console.log(data);
    setActive(data);
  };

  return (
    <main className="mt-2 border rounded-lg h-[calc(100vh-120px)] relative overflow-auto">
      <>
        <PeopleHeader peopleCount={people.length} />
        {people.length > 0 && (
          <>
            <PeopleTable
              setIsDetailsVisible={setIsDetailsVisible}
              data={people}
              handleActivePeople={handleActivePeople}
            />
            {active && (
              <div ref={detailsCardRef}>
                <PeopleDetailsCard
                  className={`${
                    isDetailsVisible ? "" : "hidden"
                  } bg-white absolute top-0 right-0 w-[68%] h-full shadow-lg rounded-lg`}
                  data={active}
                />
              </div>
            )}
          </>
        )}
      </>
    </main>
  );
};

export default Page;
