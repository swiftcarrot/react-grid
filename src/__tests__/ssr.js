/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Container, Row, Col } from '../';

test('Container', () => {
  const App = () => <Container>children</Container>;
  const html = renderToString(<App />);

  expect(html).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"sxt9hi-Container\\">.css-sxt9hi-Container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}@media(min-width:576px){.css-sxt9hi-Container{max-width:540px;}}@media(min-width:768px){.css-sxt9hi-Container{max-width:720px;}}@media(min-width:992px){.css-sxt9hi-Container{max-width:960px;}}@media(min-width:1200px){.css-sxt9hi-Container{max-width:1140px;}}</style><div class=\\"css-sxt9hi-Container\\">children</div>"`
  );
});

test('Row', () => {
  const App = () => <Row>children</Row>;
  const html = renderToString(<App />);

  expect(html).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1e6g4p7-Row\\">.css-1e6g4p7-Row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}</style><div class=\\"css-1e6g4p7-Row\\">children</div>"`
  );
});

test('Col', () => {
  const App = () => <Col>children</Col>;
  const html = renderToString(<App />);

  expect(html).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1rvsfeh-Col\\">.css-1rvsfeh-Col{position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}</style><div class=\\"css-1rvsfeh-Col\\">children</div>"`
  );
});
