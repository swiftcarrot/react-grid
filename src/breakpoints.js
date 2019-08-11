import styles from './styles';

export const breakpointNext = (name, breakpoints = styles.breakpoints) => {
  const breakpointNames = Object.keys(breakpoints).sort(
    (a, b) => breakpoints[a] - breakpoints[b]
  );
  const n = breakpointNames.indexOf(name);
  if (n < 0) {
    return new Error(`breakpoint ${name} not found in ${breakpointNames}`);
  }

  return n < breakpointNames.length - 1 ? breakpointNames[n + 1] : null;
};

export const breakpointMin = (name, breakpoints = styles.breakpoints) => {
  const min = breakpoints[name];
  return min !== 0 ? min : null;
};

export const breakpointMax = (name, breakpoints = styles.breakpoints) => {
  const next = breakpointNext(name, breakpoints);
  if (next) {
    return breakpointMin(next, breakpoints) - 0.02;
  }

  return null;
};

export const mediaBreakpointUp = (name, breakpoints = styles.breakpoints) => {
  const min = breakpointMin(name, breakpoints);
  if (min) {
    return `@media(min-width: ${min}px)`;
  }

  return '';
};

export const mediaBreakpointDown = (name, breakpoints = styles.breakpoints) => {
  const max = breakpointMax(name, breakpoints);
  if (max) {
    return `@media(max-width: ${max}px)`;
  }
  return '';
};

export const mediaBreakpointBetween = (
  lower,
  upper,
  breakpoints = styles.breakpoints
) => {
  const min = breakpointMin(lower, breakpoints);
  const max = breakpointMax(upper, breakpoints);

  if (min != null && max != null) {
    return `@media (min-width: ${min}px) and (max-width: ${max}px)`;
  } else if (max == null) {
    return mediaBreakpointUp(lower, breakpoints);
  } else if (min == null) {
    return mediaBreakpointDown(upper, breakpoints);
  }
};

export const mediaBreakpointOnly = (name, breakpoints = styles.breakpoints) => {
  const min = breakpointMin(name, breakpoints);
  const max = breakpointMax(name, breakpoints);

  if (min != null && max != null) {
    return `@media (min-width: ${min}px) and (max-width: ${max}px)`;
  } else if (max == null) {
    return mediaBreakpointUp(name, breakpoints);
  } else if (min == null) {
    return mediaBreakpointDown(name, breakpoints);
  }
};
