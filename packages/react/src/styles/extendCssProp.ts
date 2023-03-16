import { CssProps } from '.'
import { extendCssFilter } from './extendCssFilter'

type ExtendKeys = keyof typeof extendCssFilter
type ExtendCssProps = Pick<CssProps, ExtendKeys>
type GenericExtendCss = {
  css?: { [key: string]: unknown }
  [key: string]: unknown
}

function extendCssProp<T extends GenericExtendCss>(props: T) {
  const { css: inCss = {}, ...rest } = props
  const extendCss = {} as T
  const otherProps = {} as T

  Object.keys(rest).forEach((key) => {
    if (key in extendCssFilter) extendCss[key as keyof T] = rest[key]
    else otherProps[key as keyof T] = rest[key]
  })

  return { ...otherProps, css: { ...extendCss, ...inCss } as CssProps }
}

export { extendCssProp, type ExtendCssProps }
