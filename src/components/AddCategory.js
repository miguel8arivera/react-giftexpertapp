import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);

      //   setCategories([...categories, inputValue]);
      setInputValue("");
    }
    // console.log("submit realizado");

    /*     //forma a usar ya se pasaria a categories como props
    setCategories((cats) => [...cats, inputValue]); */
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add category</h2>

      <input type="text" value={inputValue} onChange={handleChangeInput} />
      <button onSubmit={handleSubmit}>Add</button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
