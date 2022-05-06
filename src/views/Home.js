import React from 'react';
import { useHistory } from 'react-router-dom';
import Entries from './Entries';
import Header from './Header';

export default function Home() {
  return (
    <>
      <Header />
      <Entries />
    </>
  );
}
