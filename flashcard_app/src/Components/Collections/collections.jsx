import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './collections.css'

const Collection = ({ selectedCollection, setSelectedCollection }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
            axios.get('http://127.0.0.1:8000/collection/')
            .then(response => setCollection(response.data))
    }, []);

    return (
        <div className="container overflow-hidden">
            <div className="row gy-5">
                {
                    selectedCollection
                    ?
                    <button onClick={() => setSelectedCollection(null)}>Return to Collection Selection</button>
                    :
                    <>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3 directions"><h5>Select a stack to study</h5></div>
                                <div className="col-md-8"></div>
                            </div>
                        </div>
                        {collection.map(item => {
                            console.log(item)
                            return (
                                <div key={item.collection_id} className="col-md-3 collectionBox">
                                    <div type="button" className="p-3 border bg-light" onClick={() => setSelectedCollection(item.collection_id)}>{item.collection_name}</div>
                                </div>
                            );
                        })}
                    </>
                }
            </div>
        </div>
    )
}
    
export default Collection;