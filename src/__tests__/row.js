import React from 'react';
import renderer from 'react-test-renderer';
import Row, { makeRow } from '../row';

test('makeRow', () => {
  expect(makeRow({ gridGutterWidth: 20 })).toMatchInlineSnapshot(`
Object {
  "boxSizing": "border-box",
  "display": "flex",
  "flexWrap": "wrap",
  "marginLeft": -10,
  "marginRight": -10,
}
`);
});

test('render', () => {
  const component = renderer.create(<Row>children</Row>);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<div
  className="css-ecrkpz-Row"
  data-eg-row="true"
>
  children
</div>
`);
});

test('noGutters', () => {
  const component = renderer.create(<Row noGutters>children</Row>);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<div
  className="css-19oau2f-Row"
  data-eg-row="true"
>
  children
</div>
`);
});
