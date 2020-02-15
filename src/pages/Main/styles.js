import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto;
  padding: 30px;
  max-width: 700px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    padding: 10px 15px;
    flex: 1;
    font-size: 16px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  margin-left: 15px;
  padding: 0 15px;
  background-color: #7159c1;
  border: 0;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
