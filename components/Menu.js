import styled from '@emotion/styled'
import { color, space } from 'styled-system'
import Link from 'next/link'
import { withRouter } from 'next/router'

const A = styled.a({
  cursor: 'pointer',
  borderBottom: '1px solid',
  borderColor: '#00d9af',
  textDecoration: 'none',
  transitionDuration: '0.2s',
  transitionProperty: 'color, border-color',
  ':hover': {
    color: '#00d9af',
  },
}, color, space)

const PageLink = withRouter(({ router, href, label }) => (
  <Link prefetch href={href} passHref>
    <A
      color='white'
      mr={3}
      borderColor={router.pathname === href ? 'transparent' : null}
    >{label}</A>
  </Link>
))

const menu = [
  { uri: '/', name: 'Home' },
  { uri: '/about', name: 'About' },
]

export const Menu = () => (
  <nav>
    <ul display='flex' listStyle='none' pl={0} my={0}>
      {menu.map((item, key) => (
        <li key={key}>
          <PageLink key={key} href={item.uri} label={item.name} />
        </li>
      ))}
    </ul>
  </nav>
)
