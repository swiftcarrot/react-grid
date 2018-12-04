/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from './theme';
import { mediaBreakpointUp } from './col';

export const makeContainer = ({ gridGutterWidth }) => ({
  width: '100%',
  paddingRight: gridGutterWidth / 2,
  paddingLeft: gridGutterWidth / 2,
  marginRight: 'auto',
  marginLeft: 'auto'
});

export const makeContainerMaxWidths = ({
  containerMaxWidths: maxWidths,
  gridBreakpoints: breakpoints
}) => {
  const styles = {};
  Object.keys(maxWidths).forEach(breakpoint => {
    const maxWidth = maxWidths[breakpoint];
    const media = mediaBreakpointUp(breakpoint, breakpoints);

    const mediaStyles = {
      maxWidth
    };

    if (media) {
      Object.assign(styles, {
        [media]: mediaStyles
      });
    } else {
      Object.assign(styles, mediaStyles);
    }
  });
  return styles;
};

const Container = ({ children, theme, fluid, ...props }) => (
  <div
    {...props}
    css={[makeContainer(theme), !fluid && makeContainerMaxWidths(theme)]}
  >
    {children}
  </div>
);

Container.defaultProps = {
  theme,
  fluid: false
};

export default Container;
