import styled from '@emotion/styled'
import { color, space } from 'styled-system'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { themeGet } from 'styled-system'

const A = styled.a(props => ({
  cursor: props.current ? 'default' : null,
  color: 'white',
  borderBottom: '1px solid',
  borderColor: props.current ? '#00d9af' : 'transparent',
  marginRight: themeGet('space.3')(props),
  textDecoration: 'none',
  transitionDuration: '0.2s',
  transitionProperty: 'color, border-color',
  ':hover': {
    color: props.current ? null : '#00d9af',
  },
}), color, space)

const PageLink = withRouter(({ router, href, label }) => (
  <Link prefetch href={href} passHref>
    <A current={router.pathname === href}>{label}</A>
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
