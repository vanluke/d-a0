import {css} from 'styled-components';

export const mobileBreakpoint = '40rem';
export const tabletBreakpoint = '768px';
export const desktopBreakpoint = '1224px';

export const media = {
  mobile: (...args) => css`
    @media (min-width: ${mobileBreakpoint}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${tabletBreakpoint}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${desktopBreakpoint}) {
      ${css(...args)}
    }
  `,
};
