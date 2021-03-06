
import React from 'react'
import { Box } from '../src'

class Carbon extends React.Component {
  componentDidMount () {
    const script = document.createElement('script')
    script.src = '//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=jxnblkcom'
    script.id = '_carbonads_js'
    this.root.appendChild(script)
  }

  render () {
    return (
      <Box {...this.props}
        my2
        p1
        rounded
        border borderGray1
        bgWhite
        css={cx}>
        <div ref={r => { this.root = r }} />
      </Box>
    )
  }
}

const cx = {
  maxWidth: 320,
  height: 118,
  '#carbonads': {
    display: 'inline-block',
    fontSize: 14,
    lineHeight: 1.25,
    textAlign: 'left',
    maxWidth: 320,
    backgroundColor: 'white',
    a: {
      textDecoration: 'none',
      color: 'inherit',
      ':hover': {}
    },
    '> span': {
      display: 'block',
      ':before': {
        content: '""',
        display: 'table'
      },
      ':after': {
        content: '""',
        display: 'table',
        clear: 'both'
      },
    },
    '.carbon-img': {
      float: 'left',
      marginRight: 8,
      '> img': {
        display: 'block'
      }
    },
    '.carbon-text': {
      overflow: 'hidden'
    },
    '.carbon-poweredby': {
      float: 'left',
      marginTop: 4,
      opacity: .5
    }
  },
}

export default Carbon

