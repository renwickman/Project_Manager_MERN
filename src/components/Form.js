import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";

const Form = (props) => {
    const { id } = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [errors, setErrors] = useState({});
    
    const onSubmitHandler = e => {
        
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/products/', {
            title,
            price,
            desc
        })
            .then(res=> {
                console.log(res)
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate(`/api/products/${id}`)
                }
            })
            .catch(err => console.log(err))
    }
    
    return (       
            <form onSubmit={onSubmitHandler}>
                <p className="col-3 offset-3">
                    <label>Title</label><br/>
                    <input type="text" 
                    onChange = {(e)=>setTitle(e.target.value)}
                    />
                    { errors.title ? <p className="text-danger">{ errors.title.message }</p> : "" }
                </p>
                <p className="col-3 offset-3">
                    <label>Price</label><br/>
                    <input type="text" 
                    onChange = {(e)=>setPrice(e.target.value)}
                    />
                    { errors.price ? <p className="text-danger">{ errors.price.message }</p> : "" }
                </p>
                <p className="col-3 offset-3">
                    <label>Description</label><br/>
                    <input type="text" 
                    onChange = {(e)=>setDesc(e.target.value)}
                    />
                    { errors.desc ? <p className="text-danger">{ errors.desc.message }</p> : "" }
                </p>
                <input className="btn btn-primary offset-3" type="submit"/>
            </form>
    )
}

export default Form