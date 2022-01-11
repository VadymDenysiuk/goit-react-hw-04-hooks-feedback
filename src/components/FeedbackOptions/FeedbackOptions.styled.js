import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 5px;
  border-radius: 4px;
  min-width: 200px;
  height: 50px;
  color: #2196f3;
  background-color: teal;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  cursor: pointer;
  border: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #2196f3;
    color: teal;
  }
`;
