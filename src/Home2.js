import React, { useState, useEffect } from "react";
import "./Grids.css";
import { useQuery } from "react-query";
import axios from "axios";
export const Home2 = () => {
  /* const Users = [
    { id: 1, name: "ali", city: "lahore", img: "../pic1.jpg" },
    { id: 2, name: "naveed", city: "lahore", img: "../pic2.jpg" },
    { id: 3, name: "asim", city: "mtn", img: "../pic3.jpg" },
    { id: 4, name: "ghafoor", city: "khi", img: "../pic4.jpg" },
    { id: 5, name: "amir", city: "lahore", img: "../pic5.jpg" },
    { id: 6, name: "nasir", city: "lahore", img: "../pic6.jpg" },
    { id: 7, name: "asiq", city: "mtn", img: "../pic7.jpg" },
    { id: 8, name: "bilal", city: "khi", img: "../pic8.jpg" },
    { id: 9, name: "moazzam", city: "lahore", img: "../pic9.jpg" },
  ];*/
  const [Prod, setProduct] = useState([]);

  /*
  const getProducts = async () => {
    // await (await fetch(`https://fakestoreapi.com/products`)).json();
    // return  axios.get(`https://fakestoreapi.com/products`)
    return await (await fetch(`https://fakestoreapi.com/products`)).json();
  }; */
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const product = res.data;
      setProduct(product);
      console.log(product);
      // console.log(...Prod);
    });
  };
  /*
  const { data, isLoading, error } = useQuery("products", getProducts);
  if (isLoading) {
    return <h2>data is loading</h2>;
  }
  if (error) {
    return <h2> some this went wrong mr.ishfaq</h2>;
  } */
  return (
    <>
      <div id="cover">
        <div className="container">
          {Prod?.map((elements) => {
            const { category, image, id, price } = elements;
            return (
              <div className="item" key={id}>
                <img src={image} alt="ff" height="200" width="100" />
                <div className="content">
                  <h2>{category}</h2>
                  <p>
                    id:{id} and Price={price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
