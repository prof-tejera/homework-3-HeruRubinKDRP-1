
import React from "react";
import LoginForm from "./OrganismComponents/LoginForm/LoginForm";
import MediaButtons from "./components/Grapics/MediaButtons/MediaButtons";
import RadioButtons from "./OrganismComponents/RadioButtons/RadioButtons";
import Pager from "./OrganismComponents/Pager/Pager";
import { AppOverview } from "./OrganismComponents/AppOverview/AppOverview";

const App = () => {
  
  const managePageChange = (page: number) => {
    console.log(page);
  }
  
  return (
    <div>
        <AppOverview />
    </div>
  );
};

export default App;
