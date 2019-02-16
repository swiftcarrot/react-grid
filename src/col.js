/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from './theme';

const percentage = x => `${(x * 100).toFixed(6)}%`;

const breakpointNext = (name, breakpoints) => {};

const breakpointMin = (name, breakpoints) => {};

const breakpointMax = (name, breakpoints) => {};

const breakpointInfix = (name, breakpoints) => {};

const assignMediaStyles = () => {};

export const mediaBreakpointUp = (name, breakpoints) => {
  const min = breakpoints[name];
  if (min) {
    return `@media(min-width: ${min}px)`;
  }
};

// todo
export const mediaBreakpointDown = (name, breakpoints) => {
  const max = breakpoints[name];
  if (max) {
    return `@media(max-width: ${max}px)`;
  }
};

// todo
export const mediaBreakpointBetween = (lower, upper, breakpoints) => {};

// todo
export const mediaBreakpointOnly = (name, breakpoints) => {};

export const makeCol = (
  { gridGutterWidth, gridColumns, gridBreakpoints },
  options = {}
) => {
  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    paddingRight: gridGutterWidth / 2,
    paddingLeft: gridGutterWidth / 2
  };

  Object.keys(gridBreakpoints).forEach(breakpoint => {
    const value = options[breakpoint];
    const media = mediaBreakpointUp(breakpoint, gridBreakpoints);

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
        flex: `0 0 ${percentage(value / gridColumns)}`,
        maxWidth: percentage(value / gridColumns)
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
        makeCol(theme, { xs, sm, md, lg, xl, auto }),
        offset && makeColOffset(theme, offset),
        order && makeColOrder(theme, order)
      ]}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  theme,
  auto: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};

export default Col;
