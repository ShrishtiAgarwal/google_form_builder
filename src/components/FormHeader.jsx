import React from "react";
import styled from "styled-components";

const StyledFormHeader = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 72px;
  background-color: #ffffff;
  padding: 0px 50px;
  justify-content: space-between;
  border-bottom: 1px solid #7306e0;
  @media (max-width: 767px) {
    padding: 0% 5%;
    height: 51px;
  }
  & > .navbar__logo {
    font-weight: 900;
    left: 50px;
    color: #7306e0;
    cursor: pointer;
    @media (max-width: 479px) {
      font-size: 20px;
      margin-left: 20px;
    }
    @media (min-width: 480px) and (max-width: 767px) {
      font-size: 20px;
      margin-left: 20px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 20px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

const FormHeader = () => {
  return (
    <StyledFormHeader>
      <div className="navbar__logo">Playment Forms</div>
    </StyledFormHeader>
  );
};

export default FormHeader;
