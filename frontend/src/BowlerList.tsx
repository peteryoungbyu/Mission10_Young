//This page displays the bowlerlist itself using the bowler type and the received json information from the
//API call to the backend

import type { Bowler } from './types/bowler';
import { useState, useEffect } from 'react';

function BowlerList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  //Makes the call to the backend and puts the resulting JSON into the bowlers variable
  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch('https://localhost:5000/Bowler');
      const data = await response.json();
      setBowlers(data);
    };

    fetchBowler();
  }, []);

  //   actually returns the table using the data
  return (
    <>
      <br />
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        {/* Displays the data taken from the JSON */}
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
