import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftApiApp = () => {
  const [categories, setCategories] = useState(["Goku"]);
  /* const categories = ["Goku", "One Punch", "Caballeros del Zodiaco", "Marvel"]; */

  //   const rendering = categories.map((category) => (
  //     <li key={category}>{category}</li>
  //   ));
  /* const rendering = categories.map((category) => {
    return <li key={category}>{category}</li>;
  }); */

  /* const handleAdd = () => {
    // setCategories([...categories, "Hunter X"]);
    setCategories((cats) => ["Shaman King", ...categories]);
    {rendering}
  }; */
  return (
    <>
      <h2>GiftApiApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map((category) => (
          //   <li key={category}>{category}</li>
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftApiApp;
