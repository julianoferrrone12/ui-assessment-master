import styled from "styled-components";

export const Title = styled.h1`
  color: #616161;
  margin-top: 5%;
  font-weight: lighter;
`;

export const Div = styled.div`
  margin-left: 10%; 
`;

export const Main = styled.main`
  height: 75vh;
  display: flex;
  align-items: center;
  margin-top: -2%;
  @media (max-width: 900px) {
    margin-top: 5em; 
  }
`;
