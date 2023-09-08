import React, {useEffect, useState} from 'react'
import axios from 'axios';

const ProductForm=()=>{
    const [productName, setProductName]=useState("");
    const [productPrice, setProductPrice]=useState("");
    const [productDescription, setProductDescription]=useState("");

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',{
            productName,
            productPrice,
            productDescription
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label><br/>
                <input type="text" onChange={(e)=>setProductName(e.target.value)}/>
            </p>
            <p>
                <label>Product Price</label><br/>
                <input type="text" onChange={(e)=>setProductPrice(e.target.value)}/>
            </p>
            <p>
                <label>Product Description</label><br/>
                <input type="text" onChange={(e)=>setProductDescription(e.target.value)}/>
            </p>
            <input type='submit'/>
        </form>
    )

    // const [message, setMessage] = useState("Loading...")
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api')
    //     .then(res=>setMessage(res.data.message))
    //     .catch(err=>console.log(err))
    // }, []);
    // return(
    //     <div>
    //         <h2>Message from the backend: {message}</h2>
    //     </div>
    // )
}

export default ProductForm;