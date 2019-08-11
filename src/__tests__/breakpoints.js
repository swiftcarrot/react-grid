/**
 * @jest-environment node
 */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { renderToString } from 'react-dom/server';
import {
  breakpointNext,
  breakpointMin,
  breakpointMax,
  mediaBreakpointUp,
  mediaBreakpointDown,
  mediaBreakpointBetween,
  mediaBreakpointOnly
} from '../';

test('breakpointNext', () => {
  expect(breakpointNext('sm')).toEqual('md');
  expect(breakpointNext('xl')).toBeNull();
});

test('breakpointMin', () => {
  expect(breakpointMin('sm')).toEqual(576);
  expect(breakpointMin('xs')).toBeNull();
});

test('breakpointMax', () => {
  expect(breakpointMax('sm')).toEqual(767.98);
  expect(breakpointMax('xl')).toBeNull();
});

test('mediaBreakpointUp', () => {
  expect(mediaBreakpointUp('xs')).toEqual('');
  expect(mediaBreakpointUp('xl')).toEqual('@media(min-width: 1200px)');
});

test('mediaBreakpointDown', () => {
  expect(mediaBreakpointDown('xs')).toEqual('@media(max-width: 575.98px)');
  expect(mediaBreakpointDown('xl')).toEqual('');
});

test('mediaBreakpointBetween', () => {
  expect(mediaBreakpointBetween('xs', 'sm')).toEqual(
    '@media(max-width: 767.98px)'
  );
  expect(mediaBreakpointBetween('sm', 'lg')).toEqual(
    '@media (min-width: 576px) and (max-width: 1199.98px)'
  );
  expect(mediaBreakpointBetween('lg', 'xl')).toEqual(
    '@media(min-width: 992px)'
  );
});

test('mediaBreakpointOnly', () => {
  expect(mediaBreakpointOnly('xs')).toEqual('@media(max-width: 575.98px)');
  expect(mediaBreakpointOnly('md')).toEqual(
    '@media (min-width: 768px) and (max-width: 991.98px)'
  );
  expect(mediaBreakpointOnly('lg')).toEqual(
    '@media (min-width: 992px) and (max-width: 1199.98px)'
  );
});

test('render', () => {
  expect(
    renderToString(
      <div
        css={css`
          ${mediaBreakpointUp('xs')} {
            font-size: 12px;
          }

          ${mediaBreakpointUp('sm')} {
            font-size: 12px;
          }
        `}
      />
    )
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"4rlk8p\\">.css-4rlk8p{font-size:12px;}@media(min-width:576px){.css-4rlk8p{font-size:12px;}}</style><div class=\\"css-4rlk8p\\"></div>"`
  );

  expect(
    renderToString(
      <div
        css={{
          [mediaBreakpointUp('xs')]: {
            fontSize: 12
          },
          [mediaBreakpointUp('sm')]: {
            fontSize: 12
          }
        }}
      />
    )
  ).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"4rlk8p\\">.css-4rlk8p{font-size:12px;}@media(min-width:576px){.css-4rlk8p{font-size:12px;}}</style><div class=\\"css-4rlk8p\\"></div>"`
  );
});
