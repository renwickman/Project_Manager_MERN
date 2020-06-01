import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";


const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [errors, setErrors] = useState({});
    
    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id})`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
        })

    }, [id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            desc
        })
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/")
                }
            })
            .catch(err => console.log("Error: ", err))
    }


    return (
        <div>
            <h1>Update the Product</h1>
            <form onSubmit={updateProduct}>

            <p className="col-3 offset-3">
                <label>Title</label><br/>
                <input type="text" 
                name="title"
                value={title}
                onChange = { e => setTitle(e.target.value)}/>
            </p>

            { errors.title ? <p className="text-danger">{ errors.title.message }</p> : "" }
            
            <p className="col-3 offset-3">
                <label>Price</label><br/>
                <input type="text" 
                name="price"
                value={price}
                onChange = { e => setPrice(e.target.value)}/>
            </p>

            { errors.price ? <p className="text-danger">{ errors.price.message }</p> : "" }

            <p className="col-3 offset-3">
                <label>Description</label><br/>
                <input type="text" 
                name="desc"
                value={desc}
                onChange = { e => setDesc(e.target.value)}/>
            </p>

            { errors.desc ? <p className="text-danger">{ errors.desc.message }</p> : "" }

            <input className="btn btn-primary btn-sm offset-3" type="submit"/>
        </form>
        </div>
    )
}

export default Update