import styled from "styled-components";

export const InputStyled = styled.div`
 display: flex;
  flex-direction: column;
  input{
    border: 1px solid #333;
    border-radius: 100vw;
    font-size: var(--step--3);
    padding: var(--step--6);
 }
  label{
    font-size: var(--step--3);
  }
`;