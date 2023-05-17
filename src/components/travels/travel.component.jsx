import React, { useEffect, useState } from 'react'
import './travel.component.css';
import axios from 'axios';


export const TravelComponent = () => {

  const [travels, setTravels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTravels, setFilteredTravels] = useState([]);

  useEffect(() => {
    getTravels();
  }, []);

  const getTravels = () => {
    axios.get("https://blogangie-production.up.railway.app/api/travels").then(resp =>{
      console.log(resp.data)
      setTravels(resp.data.travels);
      setFilteredTravels(resp.data.travels);
    })
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  
    const filteredTravels = travels.filter((travel) =>
      travel.namePlace.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTravels(filteredTravels);
  };

  return (
    <div className="row input-container">

      <input type="text" value={searchTerm} onChange={handleSearch}  placeholder="Buscar viajes" />
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        filteredTravels.map(travel => (
          <div className='col-l' key={travel.namePlace}>
            <div className="card">
              <div className="row no-gutters">
                  <div className="col-md-4 images-container">
                    <img className='imagen card-img' src={travel.img} alt={travel.namePlace} key={travel.namePlace}/>
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className='card-title'>
                        {travel.namePlace}
                      </h5>
                      <p className='card-text'> <strong>Country:</strong>  {travel.country}</p>
                      <p className='card-text'> <strong>Price:</strong> {travel.price}</p>
                      <p className='card-text textCard'><strong>Description:</strong> {travel.description}</p>


                    </div>
                  </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}
