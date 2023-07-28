import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  datas: [],
  person: {},
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getAllData: (state, action) => {
      state.datas = [...action.payload.allData];
    },
    getDataByEmpID: (state, action) => {
      state.person = { ...action.payload.data };
    },
  },
});

export const {
  getAllData,
  getDataByEmpID,
} = employeeSlice.actions;

export const selectData = (state) => state.employee;

export default employeeSlice.reducer;
