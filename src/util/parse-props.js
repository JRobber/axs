
// import cxs from 'cxs'
import { style } from 'typestyle'
import classnames from 'classnames'
import config from '../config'
import convertShorthandProps from './convert-shorthand-props'

import {
  MARGIN_REG,
  PADDING_REG,
  parseMargin,
  parsePadding,
} from './scale-prop'
import {
  FONTSIZE_REG,
  getFontSize
} from './font-size'
import {
  TYPE_REG,
  getTypeStyles
} from './typography'
import {
  WIDTH_REG,
  getWidth
} from './width'
import {
  DISPLAY_REG,
  getDisplay
} from './display'
import {
  COLOR_REG,
  BG_REG,
  BORDER_COLOR_REG,
  getColor,
  getBgColor,
  getBorderColor
} from './color'
import {
  BORDER_REG,
  getBorder
} from './border'
import {
  RADIUS_REG,
  getRadii
} from './radii'

const parseProps = original => {
  const styles = [
    { margin: 0 }
  ]
  const options = config.get()
  const { breakpoints } = options

  const margin = parseMargin(options)
  const padding = parsePadding(options)
  const fontSize = getFontSize(options)
  const typography = getTypeStyles(options)
  const color = getColor(options)
  const bg = getBgColor(options)
  const border = getBorderColor(options)
  const radii = getRadii(options)
  const styleProps = convertShorthandProps(options)(original)

  const props = Object.keys(styleProps)
    .map(key => {
      const val = styleProps[key]

      if (key === 'css') {
        styles.push(val)
      } else if (MARGIN_REG.test(key)) {
        styles.push(margin(key, val))
      } else if (PADDING_REG.test(key)) {
        styles.push(padding(key, val))
      } else if (WIDTH_REG.test(key)) {
        styles.push(getWidth(breakpoints)(val))
      } else if (DISPLAY_REG.test(key)) {
        styles.push(getDisplay(val))
      } else if (FONTSIZE_REG.test(key)) {
        styles.push(fontSize(key, val))
      } else if (TYPE_REG.test(key)) {
        styles.push(typography(key, val))
      } else if (BORDER_REG.test(key)) {
        styles.push(getBorder(val))
      } else if (RADIUS_REG.test(key)) {
        styles.push(radii(val))
      } else if (BG_REG.test(key)) {
        styles.push(bg(key, val))
      } else if (BORDER_COLOR_REG.test(key)) {
        styles.push(border(key, val))
      } else if (COLOR_REG.test(key)) {
        styles.push(color(key, val))
      } else {
        return key
      }
    }).reduce((a, key) => {
      if (key) {
        a[key] = original[key]
      }
      return a
    }, {})

  const className = classnames(
    original.className,
    // cxs(Object.assign({}, ...styles))
    style(Object.assign({}, ...styles))
  )

  return { props, className }
}

export default parseProps

