// api/proxy.js
export default async function handler(req, res) {
    const url = 'https://gqzl87dm.apicdn.sanity.io/v2024-03-13/data/query/production?query=*%5B_type+%3D%3D+%22categories%22%5D%7B%0A++_id%2C%0A++title%2C%0A++%22image%22%3A+image.asset-%3Eurl%2C%0A++%22products%22%3A+count%28*%5B_type+%3D%3D+%22products%22+%26%26+references%28%5E._id%29%5D%29%0A%7D&returnQuery=false';
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers you need here, e.g., Authorization
        },
      });
  
      // Forward the response from the Sanity API to the client
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Error fetching data from Sanity API:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }