import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {selectFilter} from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlise";
import { FormWrap, Label, SelectStyled } from "./FilterForm.styleg";

const FilterForm = ({ makes }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleMakeChange = (e) => {
    dispatch(setFilter(e? e.value : null));
  };
  
  return (
    <FormWrap>
      <Label htmlFor="make">Car brand</Label>
      <Select
        options={makes.map((make) => ({ value: make, label: make }))}
        isSearchable
        value={filter ? { value: filter, label: filter } : null}
        onChange={handleMakeChange}
        isClearable = {true}
        placeholder="Enter the text"
        styles={SelectStyled}
      />
      
    </FormWrap>
  );
};

export default FilterForm;
