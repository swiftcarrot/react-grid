import React from 'react';
import renderer from 'react-test-renderer';
import Col, { makeCol, makeColOffset, makeColOrder } from '../col';
import theme from '../theme';

test('makeCol', () => {
  expect(makeCol(theme)).toMatchInlineSnapshot(`
Object {
  "boxSizing": "border-box",
  "paddingLeft": 15,
  "paddingRight": 15,
  "position": "relative",
  "width": "100%",
}
`);
  expect(makeCol(theme, { xs: 6 })).toMatchInlineSnapshot(`
Object {
  "boxSizing": "border-box",
  "flex": "0 0 50.000000%",
  "maxWidth": "50.000000%",
  "paddingLeft": 15,
  "paddingRight": 15,
  "position": "relative",
  "width": "100%",
}
`);
  expect(makeCol(theme, { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }))
    .toMatchInlineSnapshot(`
Object {
  "@media(min-width: 1200px)": Object {
    "flex": "0 0 41.666667%",
    "maxWidth": "41.666667%",
  },
  "@media(min-width: 576px)": Object {
    "flex": "0 0 16.666667%",
    "maxWidth": "16.666667%",
  },
  "@media(min-width: 768px)": Object {
    "flex": "0 0 25.000000%",
    "maxWidth": "25.000000%",
  },
  "@media(min-width: 992px)": Object {
    "flex": "0 0 33.333333%",
    "maxWidth": "33.333333%",
  },
  "boxSizing": "border-box",
  "flex": "0 0 8.333333%",
  "maxWidth": "8.333333%",
  "paddingLeft": 15,
  "paddingRight": 15,
  "position": "relative",
  "width": "100%",
}
`);
});

test('makeColOffset', () => {
  expect(makeColOffset(theme, { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }))
    .toMatchInlineSnapshot(`
Object {
  "@media(min-width: 1200px)": Object {
    "marginLeft": "41.666667%",
  },
  "@media(min-width: 576px)": Object {
    "marginLeft": "16.666667%",
  },
  "@media(min-width: 768px)": Object {
    "marginLeft": "25.000000%",
  },
  "@media(min-width: 992px)": Object {
    "marginLeft": "33.333333%",
  },
  "marginLeft": "8.333333%",
}
`);
});

test('makeColOrder', () => {
  expect(
    makeColOrder(theme, {
      xs: 'first',
      sm: 2,
      md: 3,
      lg: 4,
      xl: 'last'
    })
  ).toMatchInlineSnapshot(`
Object {
  "@media(min-width: 1200px)": Object {
    "order": 13,
  },
  "@media(min-width: 576px)": Object {
    "order": 2,
  },
  "@media(min-width: 768px)": Object {
    "order": 3,
  },
  "@media(min-width: 992px)": Object {
    "order": 4,
  },
  "order": -1,
}
`);
});

test('Col', () => {
  const component = renderer.create(<Col>children</Col>);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<div
  className="css-1ybbpqv-Col"
  data-eg-col="true"
>
  children
</div>
`);
});
