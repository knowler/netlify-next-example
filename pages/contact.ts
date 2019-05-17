import * as React from 'react'
import { Form, Text, TextArea } from 'informed'
import { Button } from '../components'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");


const Contact: React.FunctionComponent = () => {
  const [formApi, setFormApi] = React.useState({})

  const handleSubmit = () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formApi.getValues() }),
    })
    .then(res => {
      console.log(res)
      alert("Success!")
    })
    .catch(error => alert(error))
  }

  return (
    <main p={4} bg='mirage' color='white'>
      <header>
        <h1 fontSize={4} fontWeight={300} my={0}>Contact</h1>
      </header>
      <Form name='contact' data-netlify='true' getApi={setFormApi} onSubmit={handleSubmit}>
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
  )
}

export default Contact
