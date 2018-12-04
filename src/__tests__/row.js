import React from 'react';
import renderer from 'react-test-renderer';
import Row, { makeRow } from '../row';

test('makeRow', () => {
  expect(makeRow({ gridGutterWidth: 20 })).toMatchInlineSnapshot(`
Object {
  "display": "flex",
  "flexWrap": "wrap",
  "marginLeft": -10,
  "marginRight": -10,
}
`);
});

test('Row', () => {
  const component = renderer.create(<Row />);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<div
  className="css-1e6g4p7-Row"
/>
`);
});
