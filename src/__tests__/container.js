import React from 'react';
import renderer from 'react-test-renderer';
import Container, { makeContainer, makeContainerMaxWidths } from '../container';

test('makeContainer', () => {
  expect(makeContainer({ gridGutterWidth: 20 })).toMatchInlineSnapshot(`
Object {
  "marginLeft": "auto",
  "marginRight": "auto",
  "paddingLeft": 10,
  "paddingRight": 10,
  "width": "100%",
}
`);
});

test('makeContainerMaxWidths', () => {
  expect(
    makeContainerMaxWidths({
      gridBreakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
      containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 }
    })
  ).toMatchInlineSnapshot(`
Object {
  "@media(min-width: 1200px)": Object {
    "maxWidth": 1140,
  },
  "@media(min-width: 576px)": Object {
    "maxWidth": 540,
  },
  "@media(min-width: 768px)": Object {
    "maxWidth": 720,
  },
  "@media(min-width: 992px)": Object {
    "maxWidth": 960,
  },
}
`);
});

test('fluid', () => {
  const component = renderer.create(<Container fluid />);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<div
  className="css-dztklu-Container"
/>
`);
});
