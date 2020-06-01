import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Display = (props) => {
    const [product, setProduct] = useState({});


    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                console.log(res);
                setProduct(res.data )})
            .catch(err => console.log(err));
    }, [props.id]);

    return (
        <div>
            <h2>Title: {product.title}</h2>
            <p>Price: $<em>{product.price}</em></p>
            <p>Description: <em>{product.desc}</em></p>
            <Link to={`/products/${product._id}/edit`}><button className="btn btn-success">Edit</button></Link>
        </div>
    )
}

export default Display;
