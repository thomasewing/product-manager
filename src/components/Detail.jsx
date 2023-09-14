import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const navigate = useNavigate();

    const deleteProduct = () =>{
        axios.delete('http://localhost:8000/api/products/' + id)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/products");
            })

            .catch((err)=>{
                console.log(err)
            });
    };

    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res=>{
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err=>console.log(err));
    },[])

    return(
        <div>
            <p>Item: {product.productName}</p>
            <p>Price: {product.productPrice}</p>
            <p>Description: {product.productDescription}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default Detail;