import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  div {
    position: relative;
    width: 100%;
  }

  input {
    position: relative;
    width: 100%;
    flex: 1;
    border: 1px solid #333;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    border: ${(props) => (props.error ? '2px solid red' : 'none')};
  }

  small {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #2b385b;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
    }

    a {
      color: #2b385b;
      text-decoration: none;
    }
  }
`;
