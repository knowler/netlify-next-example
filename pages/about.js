import { Menu } from '../components/Menu'

export default () => (
  <main p={4} bg='primary' color='white'>
    <header>
      <Menu />
    </header>
    <div>
      <h1 fontSize={4} fontWeight={300} my={0}>About</h1>
    </div>
  </main>
)
