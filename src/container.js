/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles';
import { mediaBreakpointUp } from './breakpoints';

export const makeContainer = ({ gutterWidth }) => ({
  boxSizing: 'border-box',
  width: '100%',
  paddingRight: gutterWidth / 2,
  paddingLeft: gutterWidth / 2,
  marginRight: 'auto',
  marginLeft: 'auto'
});

export const makeContainerMaxWidths = ({
  containerMaxWidths: maxWidths,
  breakpoints
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

const Container = ({ children, styles, fluid, ...props }) => {
  return (
    <div
      {...props}
      data-eg-container="true"
      css={[makeContainer(styles), !fluid && makeContainerMaxWidths(styles)]}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  styles,
  fluid: false
};

export default Container;
