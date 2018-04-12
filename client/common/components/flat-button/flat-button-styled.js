import styled from 'styled-components';
import {white, radicalred} from 'client/assets/palette/palette';

export const Button = styled.button`
    background-color: ${white}
    border: 2px solid ${radicalred};
    border-radius: 2px;
    box-shadow: 0 0 0 0 rgba(255, 142, 92, .8);
    color: ${radicalred};
    cursor: pointer;
    margin-top: 24px;
    margin-bottom: 4px;
    padding: 20px;
    width: 100%;
    transition: .2s ease-in-out;

    &:hover,
    &:focus {
      background-color: ${radicalred};
      color: ${white};
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
`;
