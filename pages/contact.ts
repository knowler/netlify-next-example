import * as React from 'react'
import { Form } from 'informed'
import { Button } from '../components'
import { Text } from '../components/forms'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");


const Contact: React.FunctionComponent = () => {
  const [formApi, setFormApi] = React.useState()
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formApi.getValues() }),
    })
      .then(res => {
        formApi.reset()
        setSubmitted(true)
      })
      .catch(error => console.error(error))
  }

  return (
    <main p={4} bg='mirage' color='white'>
      <header>
        <h1 fontSize={4} fontWeight={300} my={0}>Contact</h1>
      </header>
      <Form display='flex' flexDirection='column' width='24rem' mt={3} name='contact' data-netlify='true' getApi={setFormApi} onSubmit={handleSubmit}>
        <Text
          label='Full Name'
          field='name'
          validate={value => !value ? 'Required' : undefined}
          validateOnBlur
          width='24rem'
          display='block'
        />
        <Text
          label='Email'
          field='email'
          validate={value => !value ? 'Required' : undefined}
          validateOnBlur
          width='24rem'
          display='block'
        />
        <p>
          <Button type='submit'>Submit</Button>
        </p>
        <p>{submitted && 'Submission successful'}</p>
      </Form>
    </main>
  )
}

export default Contact
