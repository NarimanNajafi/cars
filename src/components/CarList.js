import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div className="flex rounded-md shadow-md m-3 p-2" key={car.id}>
        <p className=" p-1 m-2 text-md text-gray-700">
          {car.name} - ${car.cost}
        </p>
        <button
          className=" bg-red-500 hover:bg-red-700 text-white  px-6 py-3 flex ml-auto rounded-lg"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  console.log(cars);

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
