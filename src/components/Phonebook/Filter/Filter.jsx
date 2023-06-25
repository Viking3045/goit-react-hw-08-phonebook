import { useSelector, useDispatch } from 'react-redux';


import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';



const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <div
        noValidate
        autoComplete="off"
      >
        <div>
          {' '}
          <input
            id="outlined-filter-input"
            label="Find a contact by name"
            type="text"
            name="filter"
            required
            value={filter}
            onChange={handleChange}
            color="secondary"
          />
        </div>
      </div>
     
    </>
  );
};

export default Filter;


