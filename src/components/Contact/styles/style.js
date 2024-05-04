import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Div = styled.div`
  position: fixed;
  top: 5%;
  right: 13%;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    top: auto;
    left: 13%;
    margin-top: 1em; 
  }
`;

export const Title = styled.h1`
  color: #bfbbbc;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const UserIconContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Text = styled.h2`
  color: #616161;
  margin: 3px 0 5px 15px;
  font-size: 14px;
`;

export const Email = styled.h3`
  color: gray;
  display: inline;
  margin: 0 0 1px 10px;
  font-size: 14px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #616161;
  margin: 0 0 0px 15px;
`;

export const LastUpload = styled.h4`
  color: gray;
  display: inline;
  margin: 0 0 1px 20px;
  font-size: 14px;
  @media (max-width: 400px) {
    display: block;
    margin: 0 0 1px 40px;
  }
`;