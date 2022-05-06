import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';

export default function Entries() {
  const [newEntry, setNewEntry] = useState('default');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEntries();
      console.log(data);
      setEntries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmitEntry = async (e) => {
    e.preventDefault();
    console.log('prepare to handle submit');
    console.log(newEntry, 'newEntry');
    let userId = user.id;
    const response = await createEntry({ userId, content: newEntry });
    console.log(response);
  };

  return (
    <>
      <h4>Your Entries, m'lady...</h4>
      <form onSubmit={handleSubmitEntry}>
        <textarea
          value={newEntry}
          onChange={(e) => {
            setNewEntry(e.target.value);
          }}
        ></textarea>
        <button>Submot</button>
      </form>
      <ul>
        {entries.map((entrie) => (
          <li key={entrie.id}>{entrie.content}</li>
        ))}
      </ul>
    </>
  );
}
