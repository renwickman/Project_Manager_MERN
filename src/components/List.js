import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const List = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                removeFromDom(id)
            })
    }

    return (
        <div>
            <h1>All Products</h1>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={`/api/products/${product._id}`}>
                        {product.title}, $ {product.price} , {product.desc}
                    </Link>

                    <br></br>

                    <button className="btn btn-danger" onClick={ (e)=>{ deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default List
