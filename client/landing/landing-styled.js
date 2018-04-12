import styled, {keyframes} from 'styled-components';
import {media} from 'client/common/utils';
import {white} from 'client/assets/palette/palette';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  opacity: .7;
  position: relative;
  top: 0;
  left: 0;
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const ImageGroup = styled.figure`
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
`;

const arrowBase64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJJY29ucyB3aXRoIG51bWJlcnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBmaWxsPSIjMDAwMDAwIiBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MjQuMDAwMDAwLCAtNTI4LjAwMDAwMCkiPjxwYXRoIGQ9Ik02NDAsNTM2IEM2NDAsNTMxLjU4MTcyMiA2MzYuNDE4Mjc4LDUyOCA2MzIsNTI4IEM2MjcuNTgxNzIyLDUyOCA2MjQsNTMxLjU4MTcyMiA2MjQsNTM2IEM2MjQsNTQwLjQxODI3OCA2MjcuNTgxNzIyLDU0NCA2MzIsNTQ0IEM2MzYuNDE4Mjc4LDU0NCA2NDAsNTQwLjQxODI3OCA2NDAsNTM2IEw2NDAsNTM2IFogTTYzOCw1MzYgQzYzOCw1MzIuNjg2MjkxIDYzNS4zMTM3MDksNTMwIDYzMiw1MzAgQzYyOC42ODYyOTEsNTMwIDYyNiw1MzIuNjg2MjkxIDYyNiw1MzYgQzYyNiw1MzkuMzEzNzA5IDYyOC42ODYyOTEsNTQyIDYzMiw1NDIgQzYzNS4zMTM3MDksNTQyIDYzOCw1MzkuMzEzNzA5IDYzOCw1MzYgTDYzOCw1MzYgWiBNNjMyLDU0MSBMNjM2LDUzNyBMNjMzLDUzNyBMNjMzLDUzMSBMNjMxLDUzMSBMNjMxLDUzNyBMNjI4LDUzNyBMNjMyLDU0MSBMNjMyLDU0MSBaIE02MzIsNTQxIiBpZD0iU2hhcGUiLz48L2c+PC9nPjwvc3ZnPg==';

export const BouncingArrow = styled.span`
  display: none;
  ${media.tablet`
    display: inline;
    position: absolute;
    bottom: 8rem;
    left: 50%;
    width: 30px;
    height: 30px;
    mask: url(${arrowBase64});
    mask-size: cover;
    animation: ${bounce} 2s infinite;
    fill: ${white};
    background: ${white};
  `}
`;

export const Header = styled.h1`
  ${media.tablet`
    font-size: 8rem;
  `}
  font-size: 4rem;
  font-weight: bold;
  color: ${white};
  position: absolute;
  top: 50%;
  letter-spacing: .3rem;
  left: 50%;
  transform: translate(-50%, -50%);
`
