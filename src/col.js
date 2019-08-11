/** @jsx jsx */
import { jsx } from '@emotion/core';
import { mediaBreakpointUp } from './breakpoints';
import styles from './styles';

export const percentage = x => `${(x * 100).toFixed(6)}%`;

export const makeCol = (
  { gutterWidth, columns, breakpoints },
  options = {}
) => {
  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    paddingRight: gutterWidth / 2,
    paddingLeft: gutterWidth / 2
  };

  Object.keys(breakpoints).forEach(breakpoint => {
    const value = options[breakpoint];
    const media = mediaBreakpointUp(breakpoint, breakpoints);

    if (value === true) {
      const mediaStyles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };

      if (media) {
        Object.assign(styles, {
          [media]: mediaStyles
        });
      } else {
        Object.assign(styles, mediaStyles);
      }
    } else if (value === 'auto') {
      const mediaStyles = {
        flex: '0 0 auto',
        width: 'auto',
        maxWidth: '100%'
      };

      if (media) {
        Object.assign(styles, {
          [media]: mediaStyles
        });
      } else {
        Object.assign(styles, mediaStyles);
      }
    } else if (value !== false && value > 0) {
      const mediaStyles = {
        flex: `0 0 ${percentage(value / columns)}`,
        maxWidth: percentage(value / columns)
      };

      if (media) {
        Object.assign(styles, {
          [media]: mediaStyles
        });
      } else {
        Object.assign(styles, mediaStyles);
      }
    }
  });

  return styles;
};

export const makeColOffset = ({ breakpoints, columns }, offset) => {
  const styles = {};
  Object.keys(offset).forEach(name => {
    const size = offset[name];
    const media = mediaBreakpointUp(name, breakpoints);
    const mediaStyles = {
      marginLeft: percentage(size / columns)
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

export const makeColOrder = ({ breakpoints, columns }, order) => {
  const styles = {};
  Object.keys(order).forEach(name => {
    const size = order[name];
    const media = mediaBreakpointUp(name, breakpoints);
    const mediaStyles = {
      order: size === 'first' ? -1 : size === 'last' ? columns + 1 : size
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

const Col = ({
  styles,
  xs,
  sm,
  md,
  lg,
  xl,
  auto,
  offset,
  order,
  children,
  ...props
}) => {
  if (
    xs === false &&
    sm === false &&
    md === false &&
    lg === false &&
    xl === false
  ) {
    xs = true;
  }

  return (
    <div
      {...props}
      data-eg-col="true"
      css={[
        makeCol(styles, { xs, sm, md, lg, xl, auto }),
        offset && makeColOffset(styles, offset),
        order && makeColOrder(styles, order)
      ]}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  styles,
  auto: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};

export default Col;
