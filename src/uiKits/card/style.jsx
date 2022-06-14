import styled from 'styled-components';
import { colorPalette } from '../theme/colors';

export const StyleCard = styled.div`
  background-color: #e3e3e3;
  border: 0.5px solid #c2c0c0;
  border-radius: 5px;
  min-width: 330px;
  margin: 8px;
`;
export const StyleCardImg = styled.img`
  padding: 8px 11px;
  width: 125px;
  height: auto;
`;
export const StyleCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  aling-items: center;
  justify-content: center;
`;
export const StyleCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px 11px;
`;
export const StyleCardDetailRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const StyleCardDetailOption = styled.p`
  font-size: 12px;
  color: #747474;
  margin: 0;
  padding: 3px 5px;
`;
export const StyleCardDetailValue = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #747474;
  margin: 0;
  padding: 3px 5px;
`;
export const StyleCardOptions = styled.div`
  display: flex;
  flex-direction: row;
  height: 14px;
  padding: 4px 3px;
  > img {
    margin: 0 2px;
  }
`;
