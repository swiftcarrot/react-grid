/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from './theme';

export const makeRow = ({ gridGutterWidth }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: gridGutterWidth / -2,
  marginLeft: gridGutterWidth / -2
});

const Row = ({ theme, noGutters, children, ...props }) => {
  return (
    <div
      {...props}
      data-eg-row="true"
      css={[makeRow(theme), noGutters && styles.noGutters]}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  theme,
  noGutters: false
};

const styles = {
  noGutters: {
    marginRight: 0,
    marginLeft: 0,

    '& > [data-eg-col]': {
      paddingRight: 0,
      paddingLeft: 0
    }
  }
};

export default Row;
