import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';

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
  return (
    <div className="car-form panel">
      <h4 className=" subtitle is-3">Add car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="lable">Name</label>
            <input
              className="input-is expanded"
              value={name}
              onChange={handleNamechange}
            ></input>
          </div>
          <div className="field">
            <label className="lable">Cost</label>
            <input
              className="input-is expanded"
              value={cost || ''}
              onChange={handleCostchange}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
