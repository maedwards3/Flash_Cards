import React, { Component } from 'react';
import './app.css';
import '../Components/Collections/collections.css';
import Collection from './Collections/collections';
import Cards from './Cards/cards';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.selectedCollection = this.selectedCollection.bind(this)
        this.state = { 
            collectionIsSelected: false,
            selectedCollectionId: 0,
            cards: []
        }
    }

    selectedCollection = (collection_id) => {
        console.log("selected collection call") //test call
        this.setState({
            selectedCollectionId: collection_id
        });
        this.getCards();
    }

    componentDidMount(){
        this.getCards();
    }

    getCards = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/collection/${this.state.selectedCollectionId}/card/`);
            this.setState({
                cards: response.data
            })
        console.log(response.data); //test call
        console.log("get cards is being hit") //test call
    }
        catch (ex) {
            console.log("there was an error in the api call") //test call
    }}

    render() {
        return(
            <div className="my-component">
                <React.Fragment>
                    <div >
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
                            <Cards cards={this.state.cards} selectedCollection={this.state.selectedCollectionId} />
                        </div>
                    </div>
                </React.Fragment>
            </div>

        );
    }
}

export default App;