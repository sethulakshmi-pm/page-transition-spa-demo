import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';

const ApiCallTab = () => {
  
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from the API
    const fetchCoffeeData = async () => {
      try {
        console.log('USEEFFECT%$%%$--BEFORE', Date.now())
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        console.log('USEEFFECT%$%%$--AFTER', response, Date.now())
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoffeeData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCoffeeData();
  }, []);

  return (
    <div className="page-content">
      <Helmet>
        <title>ApiCall Page</title>
      </Helmet>
      <h1>Welcome to the Coffee API Page!</h1>
      <h2>Coffee Data</h2>

      {loading && <p>Loading coffee data...</p>}
      {error && <p>Error: {error}</p>}

      <div className="coffee-list">
        {coffeeData.length > 0 ? (
          coffeeData.map((coffee) => (
            <div key={coffee.id} className="coffee-item">
              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>
              <ul>
                {coffee.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <img src={coffee.image} alt={coffee.title} style={{ width: '200px', height: 'auto' }} />
            </div>
          ))
        ) : (
          <p>No coffee data available</p>
        )}
      </div>
    </div>
  );
};

export default ApiCallTab;
