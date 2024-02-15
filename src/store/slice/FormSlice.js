import { creatSlice } from 'reduxjd/toolkit';

const formSlice = creatSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducer: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { chnageName, changeCost } = formSlice.action;
export const formReducer = formSlice.reducer;
