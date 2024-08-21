import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IPeople {
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

interface RejectValue {
  message: string;
}

export const fetchPeople = createAsyncThunk<IPeople[], void, { rejectValue: RejectValue }>(
  "people/fetchPeople",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8000/api/people");
      if (res.status === 200) {
        console.log(res.data.results.people);
        return res.data.results.people;
      }
    } catch (err: any) {
      return rejectWithValue({ message: err.message });
    }
  }
);

export const deletePeople = createAsyncThunk<string, string, { rejectValue: RejectValue }>(
  "people/deletePeople",
  async (id, { rejectWithValue }) => {
    try {
      console.log("started");
      const res = await axios.delete(`http://localhost:8000/api/people/${id}`);
      console.log(res.data);
      return id;
    } catch (err: any) {
      return rejectWithValue({ message: err.message });
    }
  }
);

export const createPeople = createAsyncThunk<IPeople, IPeople, { rejectValue: RejectValue }>(
  "people/createPeople",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8000/api/people", data);
      return res.data.results.person;
    } catch (err: any) {
      return rejectWithValue({ message: err.message });
    }
  }
);