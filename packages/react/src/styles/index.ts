/* eslint-disable prettier/prettier */
import { createStitches, defaultThemeMap } from '@stitches/react';
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@sneat-ui/tokens';
import type * as Stitches from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: 'Mui',
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  utils: {
    mt: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
    }),
  },
});
