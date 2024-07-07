import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching the message:', error);
      });
  }, []);

  return (
    <div>
      <h2>Message from the Server:</h2>
      <p>{message}</p>
    </div>
  );
};

export default ExampleComponent;