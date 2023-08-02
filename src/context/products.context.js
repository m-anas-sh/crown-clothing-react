import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  let [products, setProducts] = useState([
    {
      id: 1,
      image: "https://www.crown-clothes.com/images/black-shearling.jpg",
      name: "Black Jean Shearling",
      price: "125",
    },
    {
      id: 2,
      image: "https://www.crown-clothes.com/images/blue-jean-jacket.jpg",
      name: "Blue Jean Jacket",
      price: "90",
    },
    {
      id: 3,
      image: "https://www.crown-clothes.com/images/grey-jean-jacket.jpg",
      name: "Grey Jean Jacket",
      price: "90",
    },
    {
      id: 4,
      image: "https://www.crown-clothes.com/images/brown-shearling.jpg",
      name: "Brown Shearling",
      price: "165",
    },
    {
      id: 5,
      image: "https://www.crown-clothes.com/images/brown-trench.jpg",
      name: "Tan Trench",
      price: "185",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
