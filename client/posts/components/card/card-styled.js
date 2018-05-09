import styled from 'styled-components';
import TimeAgo from 'react-timeago';

const subtle = '#aaa';

export const Container = styled.article`
  margin: 1.3rem auto 0;
  position: relative;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 0 0 5px rgba(75, 75, 75, .07);
  display: flex;
`;
export const Body = styled.div`
  display: inline-block;
  width: 55%;
`;
export const Number = styled(TimeAgo)`
  color: ${subtle};
  margin-top: 15px;
  display: inline-block;
  line-height: 2rem;
  font-size: 10px;
  text-align: center;
  height: 2rem;
`;
export const Author = styled.span`
  color: ${subtle};
  display: block;
  font-size: 12px;
  letter-spacing: .5px;
  margin: 15px 0 0;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-size: 1.75rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 1.75rem;
  margin: 10px 0;
`;

export const About = styled.p`
  display: inline-block;
  font-family: 'Lato', sans-serif;
  color: ${subtle};
  line-height: 1rem;
  font-size: 12px;
  margin: 10px 0;
`;

export const Image = styled.img`
  width: 45%;
`;

export const Meta = styled.p`
  display: flex;
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  font-size: 10px;
  color: ${subtle};
`;

export const Makes = styled.span`
  width: 100%;
  justify-content: flex-start;
`;

export const Tags = styled.span`
  width: 100%;
  justify-content: flex-end;
  text-align: end;
  margin: 5px;
`;

export const Button = styled.a`
  position: relative;
  cursor: pointer;
  font-size: .8rem;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  letter-spacing: .23rem;
  margin: 5px 0 1.1rem;
  text-align: right;
  text-transform: uppercase;
`;
