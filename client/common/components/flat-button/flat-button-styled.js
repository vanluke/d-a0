import styled from 'styled-components';

const primary = '#ff334f';
const white = '#fff';

export const Button = styled.button`
    background-color: ${white}
    border: 2px solid ${primary};
    border-radius: 2px;
    box-shadow: 0 0 0 0 rgba(255, 142, 92, .8);
    color: ${primary};
    cursor: pointer;
    margin-top: 24px;
    margin-bottom: 4px;
    padding: 20px;
    width: 100%;
    transition: .2s ease-in-out;

    &:hover,
    &:focus {
      background-color: ${primary};
      color: ${white};
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
`;
