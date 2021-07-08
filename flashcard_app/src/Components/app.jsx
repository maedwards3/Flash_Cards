import React, { Component } from 'react';
import './app.css';
import '../Components/Collections/collections.css';
import Collection from './Collections/collections';
import Cards from './Cards/cards';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.setSelectedCollection = this.setSelectedCollection.bind(this)
        this.state = { 
            collectionIsSelected: false,
            selectedCollectionId: null,
            cards: []
        }
    }

    setSelectedCollection = (collection_id) => {
        console.log("selected collection call") //test call
        this.setState({
            selectedCollectionId: collection_id
        }, () => {
            this.getCards(collection_id);
        });
    }

    componentDidMount(){
        this.getCards(0);
    }

    getCards = async (collectionId) => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/collection/${collectionId}/card/`);
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
        const { cards, selectedCollectionId } = this.state;
        const { setSelectedCollection } = this;
        return(
            <div className="my-component">
                <React.Fragment>
                    <div style={{ height: '100vh' }}>
                        <div className="container-fluid welcomeSignContainer">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-4 welcomeSign"><h4>Welcome to codeStack!</h4></div>
                                <div className="col-md-7"></div>
                            </div>
                        </div>
                        <div>
                            <Collection setSelectedCollection={setSelectedCollection} selectedCollection={selectedCollectionId} />
                        </div>
                        <div>
                            {
                                cards.length > 0 && selectedCollectionId && <Cards cards={cards} selectedCollection={selectedCollectionId} />
                            }
                        </div>
                    </div>
                </React.Fragment>
            </div>

        );
    }
}

export default App;