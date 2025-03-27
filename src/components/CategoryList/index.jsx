import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className="container"
      style={{
        marginTop: '40px', // Add space between the header button and the "All Categories" text
      }}
    >
      <h2
        className="text-center"
        style={{
          marginBottom: '20px', // Add space between "All Categories" and the image cards
        }}
      >
        <bold>All Categories</bold>
      </h2>
      <div
        className="row"
        style={{
          gap: '20px', // Add space between the image cards
        }}
      >
        {categories.map((category, index) => (
          <Category data={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;