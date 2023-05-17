import React, { useState } from 'react';

import './createTravel.component.css';
import axios from 'axios';

export const CreateTravelcomponent = () => {
  const [formState, setFormState] = useState({
    namePlace: '',
    country: '',
    price: 0,
    description: '',
    img: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const travelData = {
      namePlace: formState.namePlace,
      country: formState.country,
      price: formState.price,
      description: formState.description,
      img: formState.img
    };
    console.log(travelData);
    axios.post('https://blogangie-production.up.railway.app/api/travels',travelData).then(resp => {
      if(resp.status === 200){
        console.log(resp);
        alert('The trip has been created successfully')
      }
    }).catch(error => {
      console.log(error);
    })
    
  };

  return (
    <div className="col mb-3 d-flex justify-content-center align-items-center ">
      <div className="card divFormato">
        <div className="row d-flex justify-content-center align-items-start">
          <div className="col-md-4">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  <strong>Name Place:</strong> 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="namePlace"
                  placeholder="Place"
                  value={formState.namePlace}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  <strong>Country:</strong> 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Country"
                  value={formState.country}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  <strong>Price:</strong> 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Price"
                  value={formState.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  <strong>Description:</strong> 
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                  placeholder="Description"
                  value={formState.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="img" className="form-label">
                  <strong>Url Image:</strong> 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  placeholder="Url Image"
                  value={formState.img}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Create Travel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
