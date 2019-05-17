import React from 'react'
import styled from '@emotion/styled'
import { color, space } from 'styled-system'

const Title = styled.h1(color, space)

export default () => (
  <main>
    <Title p={4} bg='primary' color='white'>Hello, World!</Title>
  </main>
)
