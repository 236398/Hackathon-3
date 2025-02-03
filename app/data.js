import React, { useEffect, useState } from 'react';

const DataPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/proxy');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Store the error message in state
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataPage;