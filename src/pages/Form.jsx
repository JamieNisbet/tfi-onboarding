import { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert the form data to CSV format
    const csv = `Name,Email,Occupation\n${name},${email},${occupation}`
    const authHeader = "Bearer " + process.env.AIRTABLE_API

    // Send the CSV data to the server using Axios
      const options = {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'text/csv'
        }
      };
      
      await axios.post('https://api.airtable.com/v0/appotZ0LKVWaonbrM/tblskVvGgKQ8bU71T/sync/Q2MQE9tw', csv, options)
        .then(response => {
          alert('Form submitted successfully!');
          console.log(response.data);
        })
        .catch(error => {
          alert('Error submitting form. Please try again later.');
          console.log(error);
        });
      
    // Clear the form fields
    setName('');
    setEmail('');
    setOccupation('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-52">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="occupation" className="block mb-2 text-gray-700">
          Occupation
        </label>
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

