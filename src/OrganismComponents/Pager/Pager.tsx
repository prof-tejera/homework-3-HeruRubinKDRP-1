import React from "react";
import Button from "../../components/Button/Button";
import { PagerStyled } from "./pager.styled";


export interface iPagerProps {
  totalPages: number;
  pageChangeFunction: (page: number) => void;
}

const Pager = (props: iPagerProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const getDisplayedPages = () => {
    if (props.totalPages <= 5) {
      // If there are 5 or fewer pages, show all of them
      return Array.from({ length: props.totalPages }, (_, i) => i + 1);
    } else if (currentPage <= 3) {
      // If the current page is one of the first three, show the first five pages
      return [1, 2, 3, 4, "...", props.totalPages];
    } else if (currentPage >= props.totalPages - 2) {
      // If the current page is one of the last three, show the last five pages
      return [1, "...", props.totalPages - 3, props.totalPages - 2, props.totalPages - 1, props.totalPages];
    } else {
      // Otherwise, show the current page, two pages before it, and two pages after it
      return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", props.totalPages];
    }
  };

  const mangePageChange = (page: number | string) => {
    console.log(page);
    typeof page === 'number' && setCurrentPage(page);
  }

  return (
    <PagerStyled className="pagination-container">
      {getDisplayedPages().map((page, index) => (
        <Button
          key={index}
          classes={ `${page === currentPage ? "selected-page" :""} ${page !== "..." ? "pagination-button" : "pagination-button pagination-button-disabled"}` }
          label={page.toString()}
          active={page !== "..."}
          onClick={() => mangePageChange(page)}
        />
      ))}
    </PagerStyled>
  );
};

export default Pager;
