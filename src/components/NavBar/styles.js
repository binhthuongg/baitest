import styled from "styled-components";

export const StyledComponent = styled.div`
  display: flex;
  padding: 10px 10%;
  justify-content: space-between;
  background: #000;
  color: #fff;
  h3 {
    margin-bottom: 0;
  }
  ul {
    margin-bottom: 0;
  }
  li {
    display: inline-block;
    vertical-align: middle;
    &:not(:last-child) {
      margin-right: 10px;
    }
    a {
      color: #fff;
      &:hover {
        color: #007bff;
      }
    }
  }
  a {
    text-decoration: none;
  }
`;
