import styled, { css } from 'styled-components';

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 300px;
  min-width: 300px;
  box-sizing: border-box;
  color: #292b32;
  font-size: 14px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #bbc2dc;

  ${(props) => props.error && css`
    color: #e0446d;
    border-color: #e0446d;
  `}
`;

export default TextArea;
