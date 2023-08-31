import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { formId: "", deleteId: "" },
};
export const ReducerSlice = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    updateAction: (state, action) => {
      state.client.formId = action.payload;
    },
    setFormId: (state) => {
      state.client.formId = "";
    },
    deleteAction: (state, action) => {
      state.client.deleteId = action.payload;
    },
  },
});

export const { toggleChangeAction, updateAction, deleteAction, setFormId } =
  ReducerSlice.actions;

export default ReducerSlice.reducer;
