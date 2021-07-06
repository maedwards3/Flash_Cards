import React from 'react';

const HomePage = (props) => {

    return (
        <div className="container overflow-hidden">
            <div className="row gy-5">
                {props.collections.map(collection => {
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
    
export default HomePage;