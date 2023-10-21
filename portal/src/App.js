import React from 'react';
import './output.css';
import Header from "./components/headers/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App flex flex-col">
      <div className="flex items-center flex-wrap justify-center w-[100%]">
          <Header />
      </div>
        <div className="Body">
            <Body />
        </div>
    </div>
  );
}

export default App;
