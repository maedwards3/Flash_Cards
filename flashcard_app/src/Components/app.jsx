import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import Collection from './Collections/collections';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [],
            collectionIsSelected: false
        }
    }


    async getAllCardsInCollection(collection_id) {
        let response = await axios.get(`http://127.0.0.1:8000/collection/${collection_id}/card/`);
        this.setState({
            cards: response.data
        });
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4 welcomeSign"><h4>Welcome to codeStack!</h4></div>
                            <div className="col-md-7"></div>
                        </div>
                    </div>
                    {/* {this.state.collectionIsSelected == true ? 
                        <h1>Selected</h1>
                    : } */}

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">Select a stack to study</div>
                            <div className="col-md-8"></div>
                        </div>
                    </div>
                    <div>
                        <Collection />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;