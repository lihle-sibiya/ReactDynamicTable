import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import React from 'react';
import DynamicTable from './DynamicTable';
//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

function App() {
  return (
    <DynamicTable />
  );
}

export default App;