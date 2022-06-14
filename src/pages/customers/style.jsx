import styled from 'styled-components';

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  direction: rtl;
`;
export const StyleFormGroup = styled.div`
  margin: 0.5rem 0;
`;
export const StyleBtnsContaiener = styled.div`
  display: flex;
  flex-direction: row-reverse;
  & > button {
    margin: 0 0.3rem;
  }
`;
export const StyleImageUploader = styled.div``;
export const StyleImageLabel = styled.label`
  width: ${(props) => (props.hasImage ? '130px' : '100px')};
  height: 150px;
  background: #ffffff;
  background-size: cover;
  border: 1px solid #6eebe7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyleImageInput = styled.input`
  display: none;
`;
export const StyleIconContainer = styled.div`
  display: inline;
  & > img {
    margin: 0 3px;
  }
`;
