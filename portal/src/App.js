import React from 'react';
import './output.css';
import Header from "./components/headers/Header";
import MySlider from "./components/sliders/MySlider";

function App() {
  return (
    <div className="App flex justify-center">
      <div className="flex items-center flex-wrap  justify-center w-5/6">
<Header></Header>
          <MySlider></MySlider>
      </div>
    </div>
  );
}

export default App;
