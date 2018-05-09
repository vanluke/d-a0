import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {media} from 'client/common/utils';
import {
  smoke,
  lightgray,
  white,
  slategrey,
  darkgrey,
  darkslategray,
} from 'client/assets/palette/palette';

export const List = styled.ul`
 list-style: none;
 width: 150px;
 position: absolute;
 top: 75%;
 transform: scale(.8);
 transform-origin: top;
 transform-origin: right;
 right: 0;
 border-radius: 4px;
 margin-top: .5rem;
 padding: 1.5rem;
 background-color: ${white};
 box-shadow: 0 0 0 1px rgba(50, 50, 93, .08), 0 2px 4px 0 rgba(50, 50, 93, .05), 0 4px 8px 0 rgba(136, 152, 170, .08);
 transition: all 0.3s cubic-bezier(.68, -.55, .265, 1.55);
 opacity: 0;
 visibility: hidden;
`;

export const ListItem = styled.li`
  padding: 4px 0;
`;

export const ListItemRight = styled(ListItem)`
  float: right;
`;

export const Img = styled.img`
  transition: all .35s ease-in-out;
  border: 2px solid ${slategrey};
  width: auto;
  box-shadow: 0 0 6px ${slategrey};
  border-radius: 50%;
  height: 35px;
  display: none;
  cursor: pointer;

  ${media.tablet`
    display: block;
  `}
`;

export const Nav = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
`;

export const Label = styled.label`
  display: none;
  position: relative;
  margin: auto;
  transition: opacity .1s linear, transform .15s linear;

  ${media.tablet`
    display: block;
  `}
`;

export const Text = styled(NavLink)`
  display: inline;
  text-decoration: none;

  ${media.tablet`
    display: none;
  `}
`;

export const TextLink = styled(Text)`
  display: inline;
  color: ${darkgrey};

  &:hover {
    color: ${darkslategray};
  }
`;

export const Input = styled.input`
  display: none;
  &:checked ~ ${List} {
     display: block;
     overflow: auto;
     top: 100%;
     transform: scale(1);
     opacity: 1;
     visibility: visible;
  }
  &:checked ~ ${Img} {
    opacity: .75;
  }
  &:checked ~ ${Label} {
    transform: scale(1.1);
  }
`;

export const Details = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${smoke};
`;

export const Name = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0;
  font-weight: 600;
`;

export const Email = styled.div`
  font-size: 1.2rem;
  color: ${lightgray};
`;

export const Button = styled.button`
  background: transparent;
  width: 100%;
  border: 0;
  color: ${darkgrey};
  display: block;
  padding: 6px 0;
  text-align: left;

  &:hover {
    color: ${darkslategray};
  }
`;
