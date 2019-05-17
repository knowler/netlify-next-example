import * as React from 'react'
import { Form, Text, TextArea } from 'informed'
import { Menu, Button } from '../components'

const Contact: React.FunctionComponent = () => (
  <>
    <header pt={4} px={4} pb={2} bg='mirage' color='white'>
      <Menu />
    </header>
    <main p={4} bg='mirage' color='white'>
      <header>
        <h1 fontSize={4} fontWeight={300} my={0}>Contact</h1>
      </header>
      <Form name='contact' method='POST' data-netlify='true'>
        <label display='block' mt={2} mb={3}>
          <span fontSize={1}>Name</span>
          <Text display='block' mt={1} field='name' />
        </label>
        <label display='block' mt={2} mb={3}>
          <span fontSize={1}>Email</span>
          <Text display='block' mt={1} field='email' />
        </label>
        <label display='block' my={2}>
          <span fontSize={1}>Message</span>
          <TextArea display='block' mt={1} field='message' />
        </label>
        <p>
          <Button type='submit'>Submit</Button>
        </p>
      </Form>
    </main>
  </>
)

export default Contact
