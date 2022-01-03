import styled from "styled-components";
export const Div = styled.div`
  width: 200px;
  display: flex;
  & > div > form {
    margin: 5%;
    width: 90%;
  }

  & > div > form > input {
    padding: 5px;
    margin-bottom: 10px;
  }
  & > div > div {
    display: flex;
    width: 600px;
    margin-bottom: 10px;
  }
  & > div > div > p {
    margin-right: 10px;
  }
`;
