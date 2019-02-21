/**
 * @jest-environment node
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Col } from '../';

test('col', () => {
  expect(renderToString(<Col>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1ybbpqv-Col\\">.css-1ybbpqv-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-1ybbpqv-Col\\">children</div>"`
  );
});

test('col lg', () => {
  expect(renderToString(<Col>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1ybbpqv-Col\\">.css-1ybbpqv-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-1ybbpqv-Col\\">children</div>"`
  );
});

test('col xs=auto', () => {
  expect(renderToString(<Col xs="auto">children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"15svstx-Col\\">.css-15svstx-Col{box-sizing:border-box;position:relative;width:auto;padding-right:15px;padding-left:15px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;max-width:100%;}</style><div data-eg-col=\\"true\\" class=\\"css-15svstx-Col\\">children</div>"`
  );
});

test('col xs=2', () => {
  expect(renderToString(<Col xs={2}>children</Col>)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1xu0dpm-Col\\">.css-1xu0dpm-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}</style><div data-eg-col=\\"true\\" class=\\"css-1xu0dpm-Col\\">children</div>"`
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
    `"<style data-emotion-css=\\"1yz5kk8-Col\\">.css-1yz5kk8-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:992px){.css-1yz5kk8-Col{-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}}</style><div data-eg-col=\\"true\\" class=\\"css-1yz5kk8-Col\\">children</div>"`
  );
});

test('col order', () => {
  expect(
    renderToString(<Col order={{ xs: 'first' }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"r2for4-Col\\">.css-r2for4-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;-webkit-order:-1;-ms-flex-order:-1;order:-1;}</style><div data-eg-col=\\"true\\" class=\\"css-r2for4-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col order={{ md: 1 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"pjvwmc-Col\\">.css-pjvwmc-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:768px){.css-pjvwmc-Col{-webkit-order:1;-ms-flex-order:1;order:1;}}</style><div data-eg-col=\\"true\\" class=\\"css-pjvwmc-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col order={{ lg: 'last' }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"1v4et8q-Col\\">.css-1v4et8q-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:992px){.css-1v4et8q-Col{-webkit-order:13;-ms-flex-order:13;order:13;}}</style><div data-eg-col=\\"true\\" class=\\"css-1v4et8q-Col\\">children</div>"`
  );
});

test('col offset', () => {
  expect(
    renderToString(<Col offset={{ xs: 2 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"uagtm8-Col\\">.css-uagtm8-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;margin-left:16.666667%;}</style><div data-eg-col=\\"true\\" class=\\"css-uagtm8-Col\\">children</div>"`
  );

  expect(
    renderToString(<Col offset={{ lg: 2 }}>children</Col>)
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"o214x2-Col\\">.css-o214x2-Col{box-sizing:border-box;position:relative;width:100%;padding-right:15px;padding-left:15px;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;}@media(min-width:992px){.css-o214x2-Col{margin-left:16.666667%;}}</style><div data-eg-col=\\"true\\" class=\\"css-o214x2-Col\\">children</div>"`
  );
});
