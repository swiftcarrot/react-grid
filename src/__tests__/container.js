/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Container } from '../';

test('container', () => {
  expect(renderToString(<Container>children</Container>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1atz3w2-Container\\">.css-1atz3w2-Container{box-sizing:border-box;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}@media(min-width:576px){.css-1atz3w2-Container{max-width:540px;}}@media(min-width:768px){.css-1atz3w2-Container{max-width:720px;}}@media(min-width:992px){.css-1atz3w2-Container{max-width:960px;}}@media(min-width:1200px){.css-1atz3w2-Container{max-width:1140px;}}</style><div data-eg-container=\\"true\\" class=\\"css-1atz3w2-Container\\">children</div>"`
  );
});

test('container fluid', () => {
  expect(
    renderToString(<Container fluid>children</Container>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1bkhhab-Container\\">.css-1bkhhab-Container{box-sizing:border-box;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}</style><div data-eg-container=\\"true\\" class=\\"css-1bkhhab-Container\\">children</div>"`
  );
});
