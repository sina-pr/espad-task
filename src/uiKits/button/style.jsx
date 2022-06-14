import styled from 'styled-components';
import { colorPalette } from '../theme/colors';

export const StyleBtn = styled.button`
  width: ${(props) => (props.width ? props.Width : 'fit-content')};
  height: ${(props) => (props.height ? props.Height : 'fit-content')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.color ? props.color : colorPalette.white)};
  background: ${(props) => {
    if (props.disabled) {
      return colorPalette.gray_40;
    } else {
      return props.Background ? props.Background : colorPalette.red_650;
    }
  }};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colorPalette.primary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  outline: none;
  overflow: hidden;
  font-weight: bold;
  border: none;

  min-width: 72px;
  font-size: 12px;
  gap: 5px;
`;
