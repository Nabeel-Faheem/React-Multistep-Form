import React from 'react';
import './App.css';
import Header from './components/Header';
import FieldsInfo from './components/FieldsInfo';
import Form from './components/Form';
import FormContextProvider from './context/FormContextProvider';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <Header>
          <FieldsInfo />
        </Header>
        <Form />
      </FormContextProvider>
    </div>
  );
}

export default App;
