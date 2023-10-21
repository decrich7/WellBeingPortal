import React from 'react';
import './output.css';
import MyButton from "./components/UI/buttons/MyButton";
import Header from "./components/headers/Header";

function App() {
  return (
    <div className="App flex justify-center">
      <div className="flex items-center flex-wrap justify-center w-5/6">
        <Header />
      </div>
    </div>
  );
}

export default App;
