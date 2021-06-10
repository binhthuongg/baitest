import styled from "styled-components";

export const StyledComponent = styled.div`
  display: block;
  padding: 20px 0;
  .inputElement {
    margin-bottom: 15px;
    position: relative;
    input {
      border: 1px solid #ccc;
      outline: none;
      padding: 5px 20px;
      line-height: 28px;
      width: 100%;
    }
  }
  .title {
    text-align: center;
  }
  .error {
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translate(100%, -50%);
    color: red;
    margin: 0;
  }
  .buttonWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  form {
    width: 500px;
    max-width: 100%;
    margin: auto;
  }
  .socialIcons {
    a {
      display: inline-block;
      vertical-align: middle;
      font-size: 20px;
      margin-right: 5px;
    }
  }
  .errorResult {
    margin: 10px 0 15px 12px;
    color: red;
  }
`;
