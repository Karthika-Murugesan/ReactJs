
import React, { useState, useEffect } from 'react';


function UseEffect() {
    // State to store some data
    const [data, setData] = useState(null);
  
    // Effect to fetch data when the component mounts
    useEffect(() => {
      // Define a function for fetching data
      const fetchData = async () => {
        try {
          // Simulate a fetch request (replace with your actual API call)
          const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          const result = await response.json();
  
          // Update state with the fetched data
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the fetch data function
      fetchData();
  
      // The empty dependency array [] means this effect will only run once (on mount)
    }, []); 
  
    return (
      <div>
        <h1>useEffect Example</h1>
        {data ? (
          <div>
            <h2>Data Fetched:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default UseEffect;
  