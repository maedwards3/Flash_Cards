import axios from 'axios';
import React, { useState } from 'react';
import useForm from '../UseFormFunction/useForm';

const AddCard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(addNewCard);
    const [newCard, setNewCard] = useState(props.selectedCollectionId)
    
    async function addNewCard(collectionId) {
        try{
            let response = await axios.post(`http://127.0.0.1:8000/collection/${collectionId}/card/`);
            setNewCard(response.data);

        }
        catch (ex) {
            console.log("there was an error in the post api call");
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <h4>To create a new card, fill out the spaces below</h4>
                <label for="key_word" className="col-md-1 col-form-label">Enter keyword: </label>
                <div className="col-md-4">
                    <input type="text" name="key_word" value={values.key_word} onChange={handleChange} className="form-control" ></input>
                </div>
            </div>
            <div className="row mb-3">
                <label for="definition" className="col-md-1 col-form-label">Enter definition: </label>
                <div className="col-md-8">
                    <input type="text" name="definition" value={values.definition} onChange={handleChange} className="form-control" ></input>
                </div>
            </div>
            <button type="button" className="btn btn-outline-success" type="submit">Add Card</button>
        </form>
    )

}

export default AddCard;