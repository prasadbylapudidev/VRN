import '../FirebaseConfig.js'
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import React, { useState, useEffect } from 'react';
import {Form, Table } from 'react-bootstrap';

export const ContactQueries = function () {
  const [storedValues, setStoredValues] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');

  const db = getFirestore();

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "myCollection"));
      const temporaryArr = [];
      querySnapshot.forEach((doc) => {
        temporaryArr.push(doc.data());
      });
      setStoredValues(temporaryArr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

   const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const filteredData = selectedFilter
    ? storedValues.filter((data) => data.queryType === selectedFilter)
    : storedValues;

  return (
    <div>
      <br />
      <h2>Contact Submissions</h2>
      <Form.Select onChange={handleFilterChange} value={selectedFilter} style={{width:'10%',marginLeft:'10%'}}>
        <option value="">All</option>
        <option value="construction">Construction</option>
        <option value="events">Events</option>
        <option value="education">Education</option>
        <option value="computer_hardware">Computer Hardware</option>
      </Form.Select>
      <br/>
      <br/>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Query Type</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.queryType}</td>
              <td>{data.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
