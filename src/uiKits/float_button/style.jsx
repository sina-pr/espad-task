import styled from 'styled-components';
import { colorPalette } from '../theme/colors';

export const StyleFab = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  outline: 0;
  border: 0;
  background-color: ${colorPalette.primary};
  color: #fff;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  bottom: 40px;
  right: 21px;
  font-size: 24px;
`;
