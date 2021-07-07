import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Collection = () => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/collection/')
        .then(response => setCollection(response.data))
    }, []);


    return (
        <div className="container overflow-hidden">
            <div className="row gy-5">
                {collection.map(collection => {
                    return (
                        <div className="col-3">
                            <div type="button" className="p-3 border bg-light">{collection.collection_name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
    
export default Collection;