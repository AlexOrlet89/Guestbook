import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { createEntry } from '../services/entries';

export default function Entries() {
  const [entry, setEntry] = useState('default');
  const { user } = useUserContext();
  console.log(entry);

  const handleSubmitEntry = async (e) => {
    e.preventDefault();
    console.log('prepare to handle submit');
    console.log(entry, 'entry');
    let userId = user.id;
    const response = await createEntry({ userId, content: entry });
    console.log(response);
  };

  return (
    <>
      <h4>Your Entries, m'lady...</h4>
      <form onSubmit={handleSubmitEntry}>
        <textarea
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value);
          }}
        ></textarea>
        <button>Submot</button>
      </form>
    </>
  );
}
