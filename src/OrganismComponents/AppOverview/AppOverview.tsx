import React from "react";
import { AppStyled } from "../../app.styled";
import MediaButtons from "../../components/Grapics/MediaButtons/MediaButtons";
import LoginForm from "../LoginForm/LoginForm";
import Pager from "../Pager/Pager";
import { RadioButtons } from "../RadioButtons/RadioButtons";

export const AppOverview = () => {
  const managePageChange = (page: number) => {
    console.log(page);
  }

  const manageRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }
 return(
   <AppStyled>
     <div className="App-component">
       <header className="App-header">
         Media Buttons Component
       </header>
       <div className="App-content">
         <MediaButtons />
       </div>
     </div>

     <div className="App-component">
       <header className="App-header">Login form component </header>
       <div className="App-content">
         <LoginForm />
       </div>
     </div>

     <div className="App-component">
       <header className="App-header">Pager Component</header>
       <div className="App-content">
         <Pager
           pageChangeFunction={managePageChange}
           totalPages={22}
         />
       </div>
     </div>

     <div className="App-component">
       <header className="App-header">Radio Buttons Component</header>
       <div className="App-content">
         <RadioButtons
          changeHandler={manageRadioChange}
           radioItems={[
             {
               label : 'Radio Button 1',
               value : 'radio1',
               name : 'radio1',
               id : 'radio1'

             },
             {
               label : 'Radio Button 2',
               value : 'radio2',
               name : 'radio2',
               id : 'radio2'
             },
             {
               label : 'Radio Button 3',
               value : 'radio3',
               name : 'radio3',
               id : 'radio3'
             }
           ]}
            groupName={'radio-group'}
         />
       </div>
     </div>
   </AppStyled>
 )


}