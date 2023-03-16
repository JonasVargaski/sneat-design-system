import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@sneat-ui/tokens'
export * from './extendCssProp'

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
  prefix: 'SnT',
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
    m: (value: Stitches.ScaleValue<'space'>) => ({ margin: value }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({ marginTop: value }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({ marginRight: value }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({ marginBottom: value }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({ marginLeft: value }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.ScaleValue<'space'>) => ({ padding: value }),
    pt: (value: Stitches.ScaleValue<'space'>) => ({ paddingTop: value }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({ paddingRight: value }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({ paddingBottom: value }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({ paddingLeft: value }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: Stitches.ScaleValue<'space'>) => ({
      width: value,
      height: value,
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    br: (value: Stitches.ScaleValue<'radii'>) => ({ borderRadius: value }),
  },
})

export type CssProps = Stitches.CSS<typeof config>
