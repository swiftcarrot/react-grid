/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from './theme';

export const makeRow = ({ gridGutterWidth }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: gridGutterWidth / -2,
  marginLeft: gridGutterWidth / -2
});

const Row = ({ theme, children, ...props }) => (
  <div {...props} css={makeRow(theme)}>
    {children}
  </div>
);

Row.defaultProps = {
  theme
};

export default Row;
