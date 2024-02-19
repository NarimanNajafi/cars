import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';
import '../index.css';

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNamechange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostchange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
    dispatch(changeCost(0));
    dispatch(changeName(''));
  };
  return (
    <div className="rounded-xl m-5 shadow-lg p-3">
      <h4 className=" m-3 text-2xl text-gray-700">Add car</h4>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-start  w-screen">
          <div className="m-1 flex ">
            <label className="text-gray-600">Name</label>
            <input
              className=" bg-slate-300 rounded-lg p-2 m-1 outline-none"
              value={name}
              onChange={handleNamechange}
            ></input>
          </div>
          <div className="m-1">
            <label className=" text-gray-600">Cost</label>
            <input
              className=" bg-slate-300 rounded-lg p-2 m-1 outline-none"
              value={cost || ''}
              onChange={handleCostchange}
            ></input>
          </div>
        </div>
        <div className="flex justify-end ">
          <button className=" bg-indigo-800 p-3 rounded-lg text-white hover:bg-indigo-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
