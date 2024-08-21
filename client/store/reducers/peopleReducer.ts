import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPeople, deletePeople, fetchPeople } from "@/store/actions/peopleActions";
import { toast } from "react-hot-toast";

export interface IPeople {
  _id?: string;
  username: string;
  name: string;
  role: string;
  profile: string;
  status: string;
  email: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  phone: string;
  work_email: string;
  teams: string[];
}

interface PeopleState {
  list: IPeople[];
  activePeople: IPeople | null | undefined;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PeopleState = {
  list: [],
  activePeople: null,
  status: "idle",
  error: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setActivePeople : (state, action) => {
      console.log("Done")
      console.log(action.payload._id);
      let id = action.payload._id;
      state.activePeople = state.list.find((people) => people._id === id);
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPeople.fulfilled,
        (state, action: PayloadAction<IPeople[]>) => {
          state.status = "succeeded";
          state.list = action.payload;
        }
      )
      .addCase(fetchPeople.rejected, (state, action) => {
        toast.error("Error loading data: Mongoose Error")
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch people";
      })

      // adding person 
      .addCase(createPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createPeople.fulfilled,
        (state, action: PayloadAction<IPeople>) => {
          console.log("created Person:", action.payload)
          toast.success("People created successfully");
          state.list.push(action.payload);
        }
      )
      .addCase(createPeople.rejected, (state, action) => {
        toast.error(action.error.message || "Failed to delete people");
      })

      // deleting person 
      .addCase(deletePeople.fulfilled, (state, action: PayloadAction<string>) => {
        toast.success("People deleted successfully");
        state.list = state.list.filter((people) => people._id !== action.payload);
      })
      .addCase(deletePeople.rejected, (state, action) => {
        toast.error(action.error.message || "Failed to delete people");
      })
  },
});

export const { setActivePeople } = peopleSlice.actions;

export default peopleSlice.reducer;
