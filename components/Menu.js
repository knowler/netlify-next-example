import styled from '@emotion/styled'
import { color, space } from 'styled-system'
import Link from 'next/link'

const A = styled.a({ cursor: 'pointer' }, color, space)

const menu = [
  { uri: '/', name: 'Home' },
  { uri: '/about', name: 'About' },
]

export const Menu = () => (
  <nav>
    <ul display='flex' listStyle='none' pl={0} mt={0} mb={4}>
      {menu.map((item, key) => (
        <li key={key}><Link href={item.uri}><A color='white' mr={3}>{item.name}</A></Link></li>
      ))}
    </ul>
  </nav>
)
