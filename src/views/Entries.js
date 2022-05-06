import React, { useState } from 'react';

export default function Entries() {
  const [entry, setEntry] = useState('i love you');

  return (
    <>
      <h4>Your Entries, m'lady...</h4>
      <form
        onSubmit={(e) => {
          setEntry(e.target.value);
        }}
      >
        <textarea
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value);
          }}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
