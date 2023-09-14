import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props)=>{
    const{id} = useParams();
    const [productName, setProductName]=useState("");
    const [productPrice, setProductPrice]=useState("");
    const [productDescription, setProductDescription]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res=>{
                setProductName(res.data.productName);
                setProductPrice(res.data.productPrice);
                setProductDescription(res.data.productDescription);
            })
            .catch(err=>console.log(err))
    },[])

    const updateProduct =(e)=>{
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            productName,
            productPrice,
            productDescription
        })

            .then(res=>{
                console.log(res);
                navigate('/products');
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product Name</label><br/>
                    <input type="text"
                    name='productName'
                    value={productName}
                    onChange={(e)=>{setProductName(e.target.value)}}/>
                </p>
                <p>
                    <label>Product Price</label><br/>
                    <input type="text" 
                    name='productPrice'
                    value={productPrice}
                    onChange={(e)=>{setProductPrice(e.target.value)}}/>
                </p>
                <p>
                    <label>Product Description</label><br/>
                    <input type="text" 
                    name='productDescription'
                    value={productDescription}
                    onChange={(e)=>{setProductDescription(e.target.value)}}/>
                </p>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Update;