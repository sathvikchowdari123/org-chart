import React from 'react'
import { useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
const OrgChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:3001/api/data');
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div className='container-fluid'>
        <div className='row justify-content-center pt-3 pb-3'>
            <div className='col-lg-4'>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search for employee" />
        </div>
        </div> 
        

    </div>
  )
}

export default OrgChart;