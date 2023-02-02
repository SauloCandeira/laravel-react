import styled from 'styled-components';


// https://dev.to/rafacdomin/criando-um-input-com-label-flutuando-no-reactjs-3mde

export const Container = styled.input`
  width: 1540px;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #f1f1ef;
  border: none;
  border-bottom: groove;
  border-radius: 3px;
  ::placeholder {
    color: #7f7f7f;
  }
`;