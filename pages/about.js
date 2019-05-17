import { Menu } from '../components'

export default () => (
  <>
    <header pt={4} px={4} pb={2} bg='mirage' color='white'>
      <Menu />
    </header>
    <main p={4} bg='mirage' color='white'>
      <header>
        <h1 fontSize={4} fontWeight={300} my={0}>About</h1>
      </header>
      <p lineHeight='1.5' maxWidth='36rem'>Quia voluptatibus placeat id assumenda consequuntur fugit. Nihil dolor sit quam incidunt sunt. Ab ratione voluptatem est ut rerum magni. Sunt et illo molestias debitis vel.</p>
    </main>
  </>
)
