import styled from "styled-components";
export const PagerStyled = styled.div`
  display: flex;
  .selected-page{
    background-color: transparent;
    border: 1px solid #333333;
    label{
      font-weight: bold;
      color: #333333;
    }
  }
  .pagination-button{
    border-radius: 0.1rem;
  }
  .pagination-button-disabled{
    pointer-events: none;
    background-color: transparent;
    label{
      color: #333333;
    }
  }
`