import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from './styles.module.css';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const getProduct = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]); // Stabilize the function reference by including 'id' as a dependency

  useEffect(() => {
    getProduct();
  }, [getProduct]); // Now 'getProduct' is stable and won't trigger unnecessary renders

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <img src={product.images} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              <span className="badge badge-secondary">{product.category?.name}</span>
            </p>
            <p>{product.description}</p>
            <h2>
              <span>&#8377;</span> {product.price}
            </h2>
            <a href="/" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;