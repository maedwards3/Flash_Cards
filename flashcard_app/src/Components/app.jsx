import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import HomePage from './HomePage/homePage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collections: [],
            collectionIsSelected: false
        }
    }

    componentDidMount() {
        this.getCollections();
    }

    async getCollections() {
            let response = await axios.get('http://127.0.0.1:8000/collection/');
            this.setState({
                collections: response.data
            });
    }

    render() {
        return(
            <React.Fragment>
                {/* {this.state.collectionIsSelected == true ? 
                    <h1>Selected</h1>
                :  */}
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3 welcomeSign"><h4>Welcome to codeStack!</h4></div>
                            <div className="col-md-8"></div>
                        </div>
                    </div>
                    <div>
                        <HomePage collections={this.state.collections} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;