import { useState } from 'react'
import { Menu } from '../components/Menu'
import { Button } from '../components/Button'

export default () => {
  const [hello, setHello] = useState(false)

  const sayHello = () => {
    setHello(!hello)
  }

  return (
    <>
      <header pt={4} px={4} pb={2} bg='mirage' color='white'>
        <Menu />
      </header>
      <main p={4} bg='mirage' color='white'>
        <header>
          <h1 fontSize={4} fontWeight={300} my={0}>Home</h1>
        </header>
        <p lineHeight='1.5' maxWidth='36rem'>Ut sed qui quibusdam voluptatum. Nisi facere inventore repudiandae quo dolorem ad ut. Voluptatem accusantium omnis corporis magnam quam est et non. Quod sunt unde fugit modi et amet.</p>
        <section>
          <h2 fontWeight='300'>{hello ? 'Hello' : 'Goodbye'}</h2>
          <noscript>
            <p><small>Sorry, this feature requires JavaScript to be enabled.</small></p>
          </noscript>
          <Button onClick={sayHello}>Say {hello ? 'Goodbye' : 'Hello'}!</Button>
        </section>
      </main>
    </>
  )
}
