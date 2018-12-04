# react-emotion-grid

[![npm](https://img.shields.io/npm/v/react-emotion-grid.svg)](https://www.npmjs.com/package/react-emotion-grid)
[![npm](https://img.shields.io/npm/dm/react-emotion-grid.svg)](https://www.npmjs.com/package/react-emotion-grid)
[![Build Status](https://travis-ci.org/wangzuo/react-emotion-grid.svg?branch=master)](https://travis-ci.org/wangzuo/react-emotion-grid)
[![codecov](https://codecov.io/gh/wangzuo/react-emotion-grid/branch/master/graph/badge.svg)](https://codecov.io/gh/wangzuo/react-emotion-grid)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

### Installation

```sh
npm install react-emotion-grid --save
yarn add react-emotion-grid
```

### Usage

```javascript
import { Container, Row, Col } from 'react-emotion-grid';

const Layout = () => (
  <Container>
    <Row>
      <Col />
      <Col />
      <Col />
    </Row>
  </Container>
);
```

### Custom theme with emotion-theming

```javascript
// grid.js
import { withTheme } from 'emotion-theming';
import {
  Container as ReactContainer,
  Row as ReactRow,
  Col as ReactCol
} from 'react-emotion-grid';

export const Container = withTheme(ReactContainer);
export const Row = withTheme(ReactRow);
export const Col = withTheme(ReactCol);

// app.js
import { ThemeProvider } from 'emotion-theming';
import { Container, Row, Col } from './grid';

const theme = {
  gridBreakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 },
  gridColumns: 12,
  gridGutterWidth: 30
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Row>
        <Col />
        <Col />
      </Row>
    </Container>
  </ThemeProvider>
);
```

### Custom theme with props

```javascript
// grid.js
import {
  Container as ReactContainer,
  Row as ReactRow,
  Col as ReactCol
} from 'react-emotion-grid';

const theme = {
  gridBreakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 },
  gridColumns: 12,
  gridGutterWidth: 30
};

export const Container = props => <ReactContainer {...props} theme={theme} />;
export const Row = props => <ReactRow {...props} theme={theme} />;
export const Col = props => <ReactCol {...props} theme={theme} />;

// app.js
import { Container, Row, Col } from './grid';

const App = () => (
  <Container>
    <Row>
      <Col />
      <Col />
    </Row>
  </Container>
);
```

## License

MIT
