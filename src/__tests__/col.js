import { makeCol } from '../col';

const theme = {
  gridGutterWidth: 20,
  gridColumns: 12,
  gridBreakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 }
};

test('makeCol', () => {
  expect(makeCol(theme)).toMatchInlineSnapshot(`
Object {
  "flexBasis": 0,
  "flexGrow": 1,
  "maxWidth": "100%",
  "paddingLeft": 10,
  "paddingRight": 10,
  "position": "relative",
  "width": "100%",
}
`);
  expect(makeCol(theme, { xs: 6 })).toMatchInlineSnapshot(`
Object {
  "flex": "0 0 50.000000%",
  "flexBasis": 0,
  "flexGrow": 1,
  "maxWidth": "50.000000%",
  "paddingLeft": 10,
  "paddingRight": 10,
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
  "flex": "0 0 8.333333%",
  "flexBasis": 0,
  "flexGrow": 1,
  "maxWidth": "8.333333%",
  "paddingLeft": 10,
  "paddingRight": 10,
  "position": "relative",
  "width": "100%",
}
`);
});
