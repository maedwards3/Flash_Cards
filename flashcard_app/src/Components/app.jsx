import React, { Component } from 'react';
import './app.css';
import '../Components/Collections/collections.css';
import Collection from './Collections/collections';
import Cards from './Cards/cards';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collectionIsSelected: false,
            selectedCollectionId: 0
        }
    }

    selectedCollection = (collection_id) => {
        this.setState({
            selectedCollectionId: collection_id
        })
    }


    render() {
        return(
            <React.Fragment>
                <div style={{backgroundColor: "#E2E5D3"}}>
                    <div className="container-fluid welcomeSignContainer">
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
                            <div className="col-md-3 directions"><h5>Select a stack to study</h5></div>
                            <div className="col-md-8"></div>
                        </div>
                    </div>
                    <div>
                        <Collection selectedCollection={this.selectedCollection} />
                    </div>
                    <div>
                        <Cards selectedCollection={this.state.selectedCollectionId} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;