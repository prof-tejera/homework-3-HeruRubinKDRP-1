
import "./App.css";
import React from "react";
import LoginForm from "./OrganismComponents/LoginForm/LoginForm";
import MediaButtons from "./components/Grapics/MediaButtons/MediaButtons";
import RadioButtons from "./OrganismComponents/RadioButtons/RadioButtons";
import Pager from "./OrganismComponents/Pager/Pager";

const App = () => {
  
  const managePageChange = (page: number) => {
    console.log(page);
  }
  
  return (
    <div>
      <div className="App-component">
        <header className="App-header">
          Media Buttons Component (Example)
        </header>
        <div className="App-content">
          <MediaButtons />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Login form component (TODO)</header>
        <div className="App-content">
          <LoginForm />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Pager component (TODO)</header>
        <div className="App-content">
          <Pager
            pageChangeFunction={managePageChange}
            totalPages={22}
          />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Radio Buttons component (TODO)</header>
        <div className="App-content">
          <RadioButtons />
        </div>
      </div>
    </div>
  );
};

export default App;
