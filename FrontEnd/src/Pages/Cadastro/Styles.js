import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;

  h1 {
    color: #FFD700;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  box-sizing: border-box;
  margin-bottom: 15px;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px;

  .Form {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;