import styled from 'styled-components';
import {white, bluelagoon, bigstone} from 'client/assets/palette/palette';
import {ArrowSvg} from 'client/common/components/icons/arrow';
import {LineSvg, FocusPath} from 'client/common/components/icons/line';

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  background: ${white};
  box-shadow: 0 30px 60px -2px rgba(0, 0, 0, .4);
  border-radius: 2px;
  padding: 100px 56px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 50px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 18px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 18px;
  width: 100%;
`;

export const Input = styled.input`
  box-shadow: 0 0 0 1000px ${white} inset;
  border: none;
  color: ${bluelagoon};
  padding: .5rem 0;
  width: 100%;

  &:hover,
  &:focus {
    box-shadow: none;
    outline: none;
  }

  &:valid ~ ${FocusPath} {
    stroke-dashoffset: 0;
  }

  &:focus + ${ArrowSvg} {
    opacity: 1;
    transform: translateX(0);
  }

  &:focus ~ ${LineSvg} ${FocusPath} {
    stroke-dashoffset: 0;
  }
`;

export const Header = styled.h2`
  font-size: 150%;
  color: ${bigstone};
`;
