import { Menu } from '../components/Menu'

export default () => (
  <>
    <header pt={4} px={4} pb={2} bg='primary' color='white'>
      <Menu />
    </header>
    <main p={4} bg='primary' color='white'>
      <header>
        <h1 fontSize={4} fontWeight={300} my={0}>Home</h1>
      </header>
      <p lineHeight='1.5' maxWidth='36rem'>Ut sed qui quibusdam voluptatum. Nisi facere inventore repudiandae quo dolorem ad ut. Voluptatem accusantium omnis corporis magnam quam est et non. Quod sunt unde fugit modi et amet.</p>
    </main>
  </>
)
