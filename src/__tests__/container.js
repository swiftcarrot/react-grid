import React from 'react';
import renderer from 'react-test-renderer';
import Container, { makeContainer, makeContainerMaxWidths } from '../container';
import theme from '../theme';

test('makeContainer', () => {
  expect(makeContainer(theme)).toMatchInlineSnapshot(`
Object {
  "boxSizing": "border-box",
  "marginLeft": "auto",
  "marginRight": "auto",
  "paddingLeft": 15,
  "paddingRight": 15,
  "width": "100%",
}
`);
});

test('makeContainerMaxWidths', () => {
  expect(makeContainerMaxWidths(theme)).toMatchInlineSnapshot(`
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

test('render', () => {
  const component = renderer.create(<Container>children</Container>);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<div
  className="css-1atz3w2-Container"
  data-eg-container="true"
>
  children
</div>
`);
});

test('fluid', () => {
  const component = renderer.create(<Container fluid>children</Container>);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<div
  className="css-1bkhhab-Container"
  data-eg-container="true"
>
  children
</div>
`);
});
