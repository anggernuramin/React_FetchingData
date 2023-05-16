import { useState } from "react";
import ShowProduct from "./ShowProduct";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const formAddProduct = async (e) => {
    e.preventDefault();
    console.log({ title, price });
    // fetching, post data
    await fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
      }),
    });
  };

  return (
    <>
      <form className="formAddProduct" action="" onSubmit={formAddProduct}>
        <label for="Title">Title</label>
        <input type="text" value={title} name="Title" id="Title" onChange={(e) => setTitle(e.target.value)} />
        <label for="Price">Price</label>
        <input type="text" value={price} name="Price" id="Price" onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Save</button>
        <ShowProduct />
      </form>
    </>
  );
};
export default AddProduct;
