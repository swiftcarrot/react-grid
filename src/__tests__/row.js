/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Row } from '../';

test('row', () => {
  expect(renderToString(<Row>children</Row>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1gqikdj-Row\\">.css-1gqikdj-Row{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}</style><div data-eg-row=\\"true\\" class=\\"css-1gqikdj-Row\\">children</div>"`
  );
});

test('row noGutters', () => {
  expect(renderToString(<Row noGutters>children</Row>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"on7iaf-Row\\">.css-on7iaf-Row{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;margin-right:0;margin-left:0;}.css-on7iaf-Row > [data-eg-col]{padding-right:0;padding-left:0;}</style><div data-eg-row=\\"true\\" class=\\"css-on7iaf-Row\\">children</div>"`
  );
});
