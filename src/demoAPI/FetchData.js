
import React, { useState } from 'react';

// pass text from input to fecthData as props

function FetchData() {

    const [keyWord, setKeyWord] = useState("orange juice");
  
  
      const data =  {
          query: keyWord
      };
      
      fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'x-app-key':'94537b0f4a332fbb98cdb56f8e6b83fd',
          'x-app-id':'c893f968'
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      return(

        <div>
            <h1>hi</h1>
        </div>
      );
  
  }

  export default FetchData;