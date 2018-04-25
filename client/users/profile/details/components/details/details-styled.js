import styled from 'styled-components';
import {media} from 'client/common/utils';
import {white, bluelagoon, bigstone, smoke} from 'client/assets/palette/palette';

export const Input = styled.input`
  font-size: 14px;
  line-height: 2;
  color: #555;
  width: 70%;
  height: 46px;
  padding: 8px 16px;
  background-color: ${white};
  background-image: none;
  border: 1px solid ${smoke};
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0,0,0, .075);
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;

export const Details = styled.section`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const Row = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1%;
  ${media.tablet`
    width: 50%;
  `}
`;

export const Label = styled.label`
  font-size: 130%;
  display: inline-block;

  ${media.tablet`
    width: 30%;
  `}
`;
