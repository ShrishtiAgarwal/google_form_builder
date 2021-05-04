import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const StyledLoginPageContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f8f5f1;
  height: 100vh;
  @media (max-width: 767px) {
  }

  & > .login__image {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background-color: white;
    background-image: url("./form1.png");
    width: 80%;
    flex: auto;
    background-position: center;
    background-size: cover;
    @media (max-width: 767px) {
      display: none;
    }
  }
  & > .login {
    padding: 3% 5%;
    width: 45%;
    max-height: 100vh;
    position: relative;
    text-align: center;
    @media (max-width: 767px) {
      width: 100%;
      padding-top: 40px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 50%;
    }
    & .header {
      margin: 0px;
      font-size: 36px;
      font-weight: 700;
      color: #aa2ee6;
      padding-top: 40px;
      padding-bottom: 50px;
    }
    & .heading {
      margin: 0px;
      font-size: 48px;
      font-weight: 700;
      color: #7306e0;
    }
    & .btn {
      border-radius: 25px;
      outline: none;
      margin-top: 150px;
      width: 300px;
      border: none;
      color: white;
      background: #7306e0;
      font-weight: bold;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
    }
  }
`;
const HomePage = () => {
  const history = useHistory();
  return (
    <StyledLoginPageContent>
      <div className="login__image"></div>
      <div className="login">
      <div className="header">Welcome to</div>
        <div className="heading">Playment Forms</div>
        <Button
          className="btn"
          onClick={() => {
            history.push("/createForm");
          }}
        >
          Click here to create a form
        </Button>
      </div>
    </StyledLoginPageContent>
  );
};

export default HomePage;
