import { creatSlice, nanoid } from 'reduxjs/toolkit';

const carSlice = creatSlice({
  name: '',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.car.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {},
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
