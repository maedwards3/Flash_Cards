import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cards from '../Cards/cards';
import './collections.css'

const Collection = (props) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/collection/')
        .then(response => setCollection(response.data))
    }, [])
    ;

    return (
        <div className="container overflow-hidden">
            <div className="row gy-5">
                {collection.map(collection => {
                    console.log(collection)
                    return (
                        <div className="col-md-3 collectionBox">
                            <div type="button" className="p-3 border bg-light" onClick={() => props.selectedCollection(collection.collection_id)}>{collection.collection_name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
    
export default Collection;