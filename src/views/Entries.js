import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';

export default function Entries() {
  const [newEntry, setNewEntry] = useState('default');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatedEntries, setUpdatedEntries] = useState({});

  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEntries();
      // console.log(data);
      setEntries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEntries();
      // console.log(data);
      setEntries(data);
      setLoading(false);
    };
    fetchData();
  }, [updatedEntries]);

  const handleSubmitEntry = async (e) => {
    e.preventDefault();
    // console.log('prepare to handle submit');
    // console.log(newEntry, 'newEntry');
    let userId = user.id;
    const response = await createEntry({ userId, content: newEntry });
    // console.log(response);
    setUpdatedEntries(response);
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
        <button>Submit</button>
      </form>
      {loading ? (
        <label>loading...</label>
      ) : (
        <ul>
          {entries.map((entrie, i) => (
            <li key={i}>
              {entrie.content}, written by {user.email.split('@')[0]}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
