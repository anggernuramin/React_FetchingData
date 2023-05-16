import { useState, useEffect } from "react";
const ShowProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //   fetching data diluar useEffect karena agar bisa digunakan kembali,tetapi jalankan function di useEffect
  const url = "http://localhost:8080/product";
  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setProduct(result);
  };

  return (
    <>
      <table border={1} cellPadding={15} cellSpacing={0}>
        <thead>
          <tr>
            <th>No</th>
            <th>title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShowProduct;
