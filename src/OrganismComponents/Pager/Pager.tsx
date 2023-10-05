import React, { ReactElement } from "react";
import Button from "../../components/Button/Button";


export interface iPagerProps {
  totalPages : number;
  pageChangeFunction : (page : number) => void;
}
const Pager = (props : iPagerProps) => {
  const getPageButtons = () => {
    let pageButtons : ReactElement[] = [];
    for(let i = 0; i < props.totalPages; i++){
      if(i > 5 && i < props.totalPages -1 ) continue;

      pageButtons.push(
        <Button
          active={true}
          label={`${i+1}`}
          onClick={() => props.pageChangeFunction(i+1)}
        />
      )
    }
    return pageButtons;
  }

  return (
    <div className="pagination-container">
      {

      }
    </div>
  );
};

export default Pager;
