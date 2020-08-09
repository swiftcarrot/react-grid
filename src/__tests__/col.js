/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Col } from '../';

test('col', () => {
  expect(renderToString(<Col>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1l4jq7d-Col\\">.css-1l4jq7d-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-1l4jq7d-Col\\">children</div>"`
  );
});

test('col lg', () => {
  expect(renderToString(<Col>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1l4jq7d-Col\\">.css-1l4jq7d-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-1l4jq7d-Col\\">children</div>"`
  );
});

test('col xs=auto', () => {
  expect(renderToString(<Col xs="auto">children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"19aen0-Col\\">.css-19aen0-Col{box-sizing:border-box;position:relative;width:auto;padding-right:15px;padding-left:15px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-19aen0-Col\\">children</div>"`
  );
});

test('col xs=2', () => {
  expect(renderToString(<Col xs={2}>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"bolud9-Col\\">.css-bolud9-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}</style><div data-eg-col=\\"true\\" class=\\"css-bolud9-Col\\">children</div>"`
  );
});

test('col xs lg=2', () => {
  expect(
    renderToString(
      <Col xs lg={2}>
        children
      </Col>
    )
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"8s72m2-Col\\">.css-8s72m2-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:992px){.css-8s72m2-Col{-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}}</style><div data-eg-col=\\"true\\" class=\\"css-8s72m2-Col\\">children</div>"`
  );
});

test('col order', () => {
  expect(
    renderToString(<Col order={{ xs: 'first' }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"d3hto0-Col\\">.css-d3hto0-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;-webkit-order:-1;-ms-flex-order:-1;order:-1;}</style><div data-eg-col=\\"true\\" class=\\"css-d3hto0-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col order={{ md: 1 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1gsa1o0-Col\\">.css-1gsa1o0-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:768px){.css-1gsa1o0-Col{-webkit-order:1;-ms-flex-order:1;order:1;}}</style><div data-eg-col=\\"true\\" class=\\"css-1gsa1o0-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col order={{ lg: 'last' }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1pz8uqe-Col\\">.css-1pz8uqe-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:992px){.css-1pz8uqe-Col{-webkit-order:13;-ms-flex-order:13;order:13;}}</style><div data-eg-col=\\"true\\" class=\\"css-1pz8uqe-Col\\">children</div>"`
  );
});

test('col offset', () => {
  expect(
    renderToString(<Col offset={{ xs: 2 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1i0so4-Col\\">.css-1i0so4-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;margin-left:16.666667%;}</style><div data-eg-col=\\"true\\" class=\\"css-1i0so4-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col offset={{ lg: 2 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1v9xb5u-Col\\">.css-1v9xb5u-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:992px){.css-1v9xb5u-Col{margin-left:16.666667%;}}</style><div data-eg-col=\\"true\\" class=\\"css-1v9xb5u-Col\\">children</div>"`
  );
});
