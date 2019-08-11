/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles';

export const makeRow = ({ gutterWidth }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: gutterWidth / -2,
  marginLeft: gutterWidth / -2
});

const Row = ({ styles, noGutters, children, ...props }) => {
  return (
    <div
      {...props}
      data-eg-row="true"
      css={[makeRow(styles), noGutters && rowStyles.noGutters]}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  styles,
  noGutters: false
};

const rowStyles = {
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
