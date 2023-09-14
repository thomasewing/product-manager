import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

const ProductList = (props)=>{
    const {removeFromDom, products, setProducts}= props;
    const deleteProduct=(id)=>{
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res=>{
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log("ALL PRODUCTS",res.data);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return(
        <div>
            {
                products.map((product,index)=>{
                return (
                    <div key={index}>
                        {/* <p>{product.productName}</p> */}
                        <Link to={`/products/${product._id}`}>{product.productName} Info:</Link>
                        <Link to={`/products/edit/`+ product._id}>Edit</Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                )})
            }
        </div>
    );
}

export default ProductList