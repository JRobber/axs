
import React from 'react'
import { Box, Text } from '../src'
import Container from './Container'
import Dit from './Dit'

const Cta = () => (
  <Container is='section' py4>
    <Dit />
    <Text size={3} bold>
      Read the docs and get started
    </Text>
    <Text
      is='a'
      href='https://github.com/jxnblk/axs'
      size={2}
      bold
      violet
      children='View on GitHub'
    />
  </Container>
)

export default Cta

