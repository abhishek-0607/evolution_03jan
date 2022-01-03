import styled from "styled-components";
export const Div = styled.div`
  display: flex;
  width: 200px;
  & > form {
    margin: 5%;
    width: 90%;
  }

  & > form > input {
    padding: 5px;
    margin-bottom: 10px;
  }
`;
