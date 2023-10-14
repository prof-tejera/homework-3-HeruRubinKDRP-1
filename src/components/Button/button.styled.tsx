import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 100vw;
  font-weight: 400 !important;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-in-out;
  border: none;
  color: black;
  padding: var(--step--6) var(--step--4);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: var(--step--3);
  margin: 0;
  cursor: pointer;  
  
  label {
    position: relative;
    transition: all 0.2s ease-in-out;
    z-index: 200;
    pointer-events: none;
  }

  .expander {
    background-color: transparent;
    border-radius: 100vw;
    inset: 50%;
    opacity: 0;
    position: absolute;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    z-index: 100;
  }

  &.Default-button {
    
  }

  &.Default-button-active {
    background-color: rgb(71, 145, 241);
  }

  &.expand-bg {
    &:hover {
      .expander {
        inset: 0;
        opacity: 1;
      }
    }
  }

  &.default {
    background-color: #29404f;

    &.expand-bg {
      &:hover {
        background-color: rgb(71, 145, 241);

        label {
          color: #333333;
        }
      }
    }

    label {
      color: white;
    }
  }

  &.primary {
    background-color: #007306;

    label {
      color: white;
    }

    &.expand-bg {
      &:hover {
        label {
          color: #333;
        }

        .expander {
          background-color: #b9e0ab;
          border: 1px solid #007306;
        }
      }
    }

    &.default-hover {
      &:hover {
        background-color: #b9e0ab;

        label {
          color: #333;
        }
      }
    }
  }

  &.secondary {
    background-color: rgb(245, 246, 246);
    border: 1px solid #333;

    label {
      color: #333333;
    }

    &.expand-bg {
      &:hover { 
        label {
          color: #fff;
        } 
        .expander {
          background-color: #232623;
          border: 1px solid #232623;
        }
      }
    }
  }

`;