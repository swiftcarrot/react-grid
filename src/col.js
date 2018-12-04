/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from './theme';

export const percentage = x => `${(x * 100).toFixed(6)}%`;

export const mediaBreakpointUp = (name, breakpoints) => {
  const min = breakpoints[name];
  if (min) {
    return `@media(min-width: ${min}px)`;
  }
};

// todo: fix max
export const mediaBreakpointDown = (name, breakpoints) => {
  const max = breakpoints[name];
  if (max) {
    return `@media(max-width: ${max}px)`;
  }
};

export const makeCol = (
  { gridGutterWidth, gridColumns, gridBreakpoints },
  options = {}
) => {
  const styles = {
    position: 'relative',
    width: '100%',
    paddingRight: gridGutterWidth / 2,
    paddingLeft: gridGutterWidth / 2,
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  };

  Object.keys(gridBreakpoints).forEach(name => {
    const size = options[name];

    if (size && size > 0) {
      const media = mediaBreakpointUp(name, gridBreakpoints);
      const mediaStyles = {
        flex: `0 0 ${percentage(size / gridColumns)}`,
        maxWidth: percentage(size / gridColumns)
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

export const makeColOffset = ({ gridBreakpoints, gridColumns }, offset) => {
  const styles = {};
  Object.keys(offset).forEach(name => {
    const size = offset[name];
    const media = mediaBreakpointUp(name, gridBreakpoints);
    const mediaStyles = {
      marginLeft: percentage(size / gridColumns)
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

export const makeColOrder = ({ gridBreakpoints, gridColumns }, order) => {
  const styles = {};
  Object.keys(order).forEach(name => {
    const size = order[name];
    const media = mediaBreakpointUp(name, gridBreakpoints);
    const mediaStyles = {
      order: size === 'first' ? -1 : size === 'last' ? gridColumns + 1 : size
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
  theme,
  xs,
  sm,
  md,
  lg,
  xl,
  offset,
  order,
  children,
  ...props
}) => (
  <div
    {...props}
    css={[
      makeCol(theme, { xs, sm, md, lg, xl }),
      offset && makeColOffset(theme, offset),
      order && makeColOrder(theme, order)
    ]}
  >
    {children}
  </div>
);

Col.defaultProps = {
  theme,
  xs: -1,
  sm: -1,
  md: -1,
  lg: -1,
  xl: -1
};

export default Col;
