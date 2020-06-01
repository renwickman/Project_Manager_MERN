import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from '../components/List';
import Form from '../components/Form';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log(res);
                setProducts(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    
    return (
        <div>
           <Form />
           <hr/>
           {loaded && <List products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Home