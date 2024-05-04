import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 75vw;
  height: 30vh;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  position: relative;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    width: 75vw;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 65vw;
  }
`;

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 100%;
  margin: 0;
  position: absolute;
  left: 0;
  top: 50%; 
  transform: translateY(-50%);
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: 0;
  width: 1px;
  background-color: #ccc;
  margin-left: -0.5px; 
`;

export const UpperHalf = styled.div`
  flex: 1;
  display: flex;
`;

export const LowerHalf = styled.div`
  flex: 1;
  display: flex;
`;

export const LeftHalf = styled.div`
  flex: 1;
`;

export const RightHalf = styled.div`
  flex: 1;
  padding-left: 30px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #3eb1eb;
  font-size: 22px;
  margin: 0 0 0 10px;
`;

export const InfoIcon = styled(FontAwesomeIcon)`
  position: absolute;
  margin: 0;
  right: 20px;
  color: #bfbbbc;
  font-size: 20px;
`;

export const TitleUpper = styled.h5`
  color: #616161;
  margin: 0 0 0 10px;
  font-size: 22px;
  display: inline;
`;

export const TextUpper = styled.p`
  color: gray;
  margin: 20px 0 0 10px;
  font-size: 18px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const TitleLower = styled.p`
  color: #22ab55;
  margin: 20px 0 0 10px;
  font-size: 35px;
  font-weight: bold;

  @media (max-width: 480px) {
    margin: 60px 0 0 -5px;
  }
`;

export const TextLower = styled.p`
  color: #bfbbbc;
  margin: 20px 0 0 10px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 480px) {
    margin: 10px 0 0 -5px;
  }
`;