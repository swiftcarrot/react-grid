/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Row } from '../';

test('row', () => {
  expect(renderToString(<Row>children</Row>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"ecrkpz-Row\\">.css-ecrkpz-Row{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}</style><div data-eg-row=\\"true\\" class=\\"css-ecrkpz-Row\\">children</div>"`
  );
});

test('row noGutters', () => {
  expect(renderToString(<Row noGutters>children</Row>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"19oau2f-Row\\">.css-19oau2f-Row{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;margin-right:0;margin-left:0;}.css-19oau2f-Row > [data-eg-col]{padding-right:0;padding-left:0;}</style><div data-eg-row=\\"true\\" class=\\"css-19oau2f-Row\\">children</div>"`
  );
});
