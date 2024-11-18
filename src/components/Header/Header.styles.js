import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #61dafb;
  font-size: 1.5em;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }

  li {
    color: #fff;
  }

  a {
    color: #61dafb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
