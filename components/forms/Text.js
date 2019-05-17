import { BasicText, asField } from 'informed'
import { ErrorMessage } from './ErrorMessage'
import styled from '@emotion/styled'

export const Text = asField(({ fieldState, ...props }) => {
  const { error } = fieldState
  const { label, width, ...rest } = props

  return (
    <label width={width} mt={2} mb={3}>
      <p display='flex' justifyContent='space-between' my={0}>
        <span fontSize={1}>{label}</span>&nbsp;
        <ErrorMessage
          opacity={error ? 1 : 0}
          children={error || null}
        />
      </p>
      <BasicText
        {...rest}
        fieldState={fieldState}
        border='1px solid'
        borderColor={error ? 'pink' : 'green'}
        backgroundColor='#1c2032'
        color='white'
        display='block'
        fontSize={2}
        mt={1}
        p={2}
        width='100%'
        transition='0.5s ease'
      />
    </label>
  )
})

Text.displayName = 'Text'
